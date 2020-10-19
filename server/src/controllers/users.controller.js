import usuarios from '../models/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config';

export async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export async function createUsers(req, res) {
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

export async function updateUsers(req, res) {
    const {id} = req.params;
    const {rut, nombre, apellido, password} =  req.body;
    const users = await usuarios.findOne({
        attributes: ['rut','nombre', 'apellido','password'],
        where: {id}
    });
    const userUpdate = await usuarios.update({
        rut,
        nombre,
        apellido,
        password
    },
    {
        where: {id}
    });
    res.json({
        message: 'Usuario actualizado',
        userUpdate
    });
};

export async function deleteUsers(req, res) {
    const {id} = req.params;
    await usuarios.destroy({
        where: {
            id
        }
    });
    res.json({message: 'Usuario eliminado'});
};

export async function getUsersId(req, res) {
    const {id} = req.params;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id','password']
    });
    res.json(user);
};

export async function getAllUsers(req, res) {
    const allUsers = await usuarios.findAll({
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id', 'password'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allUsers});
};