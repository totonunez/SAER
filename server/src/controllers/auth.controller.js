import usersControllers from '../controllers/users.controller.js';
import usuarios from '../models/users';
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
            const user_token = jwt.sign({id: newUsers.id}, config.SECRET_conserje, {expiresIn: 120});
            res.json({message: "Usuario registrado correctamente", data: newUsers, token: user_token});
        };
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Problemas al registrar usuario, contactese con el administrador del sistema", data: {}})
    };
};

export const signIn = async (req, res) => {
    const {rut} = req.body;
    const user = await usuarios.findOne({
        where: {rut},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password']
    });
    if(user){
        const matchPassword = await comparePassword(req.body.password, user.password);
        let user_token = null;
        if(matchPassword){
            user_token = jwt.sign({id: user.id}, config.SECRET_conserje, {expiresIn: 120});
            res.json({Usuario: user, token: user_token});
        }else{
            res.status(400).json({message: "Password incorrecta"});
        };     
    }else{
        res.status(400).json({message: "Usuario no encontrado"});
    };
};