//import usersControllers from '../controllers/users.controller.js';
import usuarios from '../models/users';
import bcrypt from 'bcryptjs';
import config from '../config';
import jwt from 'jsonwebtoken';

export async function comparePassword(password, receivePassword) {
    return await bcrypt.compare(password, receivePassword);
};

export const signUp = async (req, res) => {
    const {rut, nombre, apellido} = req.body;
    console.log(rut, nombre, apellido);
    res.json("sign up");
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