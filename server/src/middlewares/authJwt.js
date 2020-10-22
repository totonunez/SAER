import jwt from 'jsonwebtoken';
import config from '../config';
import users from '../models/users';
import roles from '../models/roles';

export const verifyToken = async (req, res, next) => {
    try{
        const token = req.headers["x-access-token"];
        console.log(token);
        !token && res.status(403).json({message: "Ha ocurrido un problema con la autenticación"});
        const decoded = jwt.verify(token, config.SECRET);
        console.log("aqui", decoded);
        const id = decoded.id;
        req.id = id;
        const user = await users.findOne({
            where: {id},
            attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
        });
        !user && res.status(404).json({message: "No se encuentra el usuario"});
        console.log("user: ", user);
        next();
    }catch(error){
        console.log(error);
        res.json({message: "Ha ocurrido un problema con la autenticación"});
    };
};

export const administrador = async (req, res, next) => {

};

export const superUsuario = async (req, res, next) => {
    let id = req.id;
    const user = await users.findOne({
        where: {id},
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
    });
    console.log(user.roles_id);
    id = user.roles_id;
    const rol = await roles.findOne({
        where: {id},
        attributes: ['id', 'cod_rol', 'nombre']
    });
    console.log(rol);
    rol.cod_rol === "adm" ? next() : res.status(403).json({message: "Se requiere acceso de administrador"});
};

export const usuario = async (req, res, next) => {
    
};