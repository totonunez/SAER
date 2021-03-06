import usuarios from '../models/users';
import roles from '../models/roles';
import correos from '../models/correos';
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
    const {rut, nombre, apellido, telefono_casa, password, telefono_celular, roles_id, correo} = req.body;
    try{
        let newUsers = await usuarios.create({
            rut,
            nombre,
            apellido,
            telefono_casa,
            password: await encryptPassword(password),
            telefono_celular,
        },{
            fields: ['rut','nombre','apellido','telefono_casa','password', 'telefono_celular']
        });
        let id = roles_id;
        const rol = await roles.findOne({
            where: {id},
            attributes: ['id','nombre','cod_rol']
        });
        const users_id = newUsers.dataValues.id
        const newCorreo = await correos.create({
            correo,
            users_id
        },{
            fields: ['correo', 'users_id']
        })
        newUsers.addRoles([rol]);
        newUsers && res.json({message: "Usuario registrado correctamente", data: newUsers});
    } catch (e) {
        console.log(e);
        res.json({message: "Problemas al registrar usuario, contactese con el administrador del sistema", data: {}})
    };
};

export const signIn = async (req, res) => {
    const {rut} = req.body;
    let bool = false;
    const user = await usuarios.findOne({
        where: {rut},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'password'],
        include: [
            roles
        ]
    });
    if(user){
        const matchPassword = await comparePassword(req.body.password, user.password);
        let user_token = null;
        if(matchPassword){
            user_token = jwt.sign({id: user.id}, config.SECRET, {expiresIn: 3600});
            res.cookie('token', user_token, {httpOnly: true});
            const codRol = user.roles[0].dataValues.cod_rol
            const result = {
                nombre: user.nombre,
                apellido: user.apellido,
                cod_rol: codRol
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

export const verifyAdm = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resul: null, cod_rol: "", message: "Ha ocurrido un problema con la autenticación"});
    let verifyDecoded = null;
    const aux = jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    if(verifyDecoded !== null){
        res.json({resul: null, cod_rol: "", message: "Su sesión ha expirado"});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        const user = await usuarios.findOne({
            where: {
                id: decoded.id
            },
            include: [
                roles
            ]
        });
        user.dataValues.roles[0].dataValues.cod_rol === "adm" ? res.json({resul: true, cod_rol: user.dataValues.roles[0].dataValues.cod_rol}) : res.json({
            resul: false, 
            cod_rol: user.dataValues.roles[0].dataValues.cod_rol, 
            message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
        });
    } 
};

export const verifySup = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resul: null, cod_rol: "", message: "Ha ocurrido un problema con la autenticación"});
    let verifyDecoded = null;
    const aux = jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    if(verifyDecoded !== null){
        res.json({resul: null, cod_rol: "", message: "Su sesión ha expirado"});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        const user = await usuarios.findOne({
            where: {
                id: decoded.id
            },
            include: [
                roles
            ]
        });
        user.dataValues.roles[0].dataValues.cod_rol === "sup" ? res.json({resul: true, cod_rol: user.dataValues.roles[0].dataValues.cod_rol}) : res.json({
            resul: false, 
            cod_rol: user.dataValues.roles[0].dataValues.cod_rol, 
            message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
        });
    } 
};

export const verifyUsr = async (req, res) => {
    const token = req.cookies.token;
    !token && res.json({resul: null, cod_rol: "", message: "Ha ocurrido un problema con la autenticación"});
    let verifyDecoded = null;
    const aux = jwt.verify(token, config.SECRET, (err) => {verifyDecoded = err});
    if(verifyDecoded !== null){
        res.json({resul: null, cod_rol: "", message: "Su sesión ha expirado"});
    }else{
        const decoded = jwt.verify(token, config.SECRET)
        const user = await usuarios.findOne({
            where: {
                id: decoded.id
            },
            include: [
                roles
            ]
        });
        user.dataValues.roles[0].dataValues.cod_rol === "usr" ? res.json({resul: true, cod_rol: user.dataValues.roles[0].dataValues.cod_rol}) : res.json({
            resul: false, 
            cod_rol: user.dataValues.roles[0].dataValues.cod_rol, 
            message: "Su usuario no se encuentra autorizado para acceder a esta interfaz"
        });
    } 
};

export const logOut = async (req, res) => {
    const user_token = "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    res.cookie('token', user_token, {httpOnly: true});
    res.json({resul: null, message: "Se ha cerrado la sesión"});
};