import usuarios from '../models/users';
import roles from '../models/roles';
import bcrypt from 'bcryptjs';
import config from '../config';
import jwt from 'jsonwebtoken';

export async function comparePassword(password, receivePassword) {
    return await bcrypt.compare(password, receivePassword);
};

export async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export async function consulRol(id) {
    const codRol = await roles.findOne({
        where: {id},
        attributes: ['cod_rol']
    });
    return codRol;
};

export const signUp = async (req, res) => {
    const {rut, nombre, apellido, roles_id, password} = req.body;
    try{
        let newUsers = await usuarios.create({
            rut,
            nombre,
            apellido,
            roles_id,
            password: await encryptPassword(password)
        },{
            fields: ['rut','nombre','apellido','roles_id','password']
        });
        if(newUsers){
            const user_token = jwt.sign({id: newUsers.id}, config.SECRET, {expiresIn: 120});
            res.json({message: "Usuario registrado correctamente", data: newUsers, token: user_token});
        };
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Problemas al registrar usuario, contactese con el administrador del sistema", data: {}})
    };
};

export const signIn = async (req, res) => {
    const {rut} = req.body;
    let bool = false;
    const user = await usuarios.findOne({
        where: {rut},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password']
    });
    if(user){
        const matchPassword = await comparePassword(req.body.password, user.password);
        let user_token = null;
        if(matchPassword){
            user_token = jwt.sign({id: user.id}, config.SECRET, {expiresIn: 120});
            res.cookie('user_token', user_token, {httpOnly: true});
            const codRol = await consulRol(user.roles_id);
            const result = {
                nombre: user.nombre,
                apellido: user.apellido,
                cod_rol: codRol.cod_rol
            };
            bool = true;
            res.json({Resultado: bool ,Usuario: result, token: user_token});
        }else{
            res.json({resultado: bool ,message: "Password incorrecta"});
        };     
    }else{
        res.json({resultado: bool ,message: "Usuario no encontrado"});
    };
};