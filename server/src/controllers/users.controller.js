import usuarios from '../models/users';
import departamentos from '../models/departamentos';
import roles from '../models/roles';
import realizas from '../models/realizas';
import supervisas from '../models/supervisas';
import correos from '../models/correos';
import turnos from '../models/turnos';
import jwt from 'jsonwebtoken';
import config from '../config';
import * as auth from "./auth.controller";
import users from '../models/users';

export async function updateUsers(req, res) {
    const {id} = req.params;
    const {correo, telefono_casa, telefono_celular, password} =  req.body;
    const user = await usuarios.findOne({
        attributes: ['telefono_casa','telefono_celular','password'],
        where: {id}
    });
    if(user){
        console.log(correo, telefono_casa, telefono_celular, password);
        const userUpdate = await usuarios.update({
            telefono_casa: telefono_casa,
            telefono_celular: telefono_celular,
            password: await auth.encryptPassword(password)
        },
        {
            where: {id}
        });
        const correoUpdate = await correos.update({
            correo: correo
        },
        {
            where: {users_id: id}
        });
        res.json({
            message: 'Usuario actualizado correctamente',
            resultado: true
        });
    }else{
        res.json({message: "Ha ocurrido un problema al actualizar el usuario", resultado: false})
    }
};

export async function deleteUsers(req, res) {
    const {id} = req.params;
    try{
        const user = await usuarios.findOne({
            where: {id},
            attributes: ['id', 'rut', 'nombre', 'apellido','password'],
            include: [
                roles,
                departamentos
            ]
        });
        console.log(user);
        const rol = await roles.findOne({
            where: {
                id: user.dataValues.roles[0].dataValues.id
            },
            attributes: ['id', 'cod_rol', 'nombre']
        });
        let depto 
        user.dataValues.departamento ? depto = await departamentos.findOne({
            where: {
                id: user.dataValues.departamentos[0].dataValues.id
            },
            attributes: ['id', 'n_depto']
        }) : depto = false;
        const turno = await turnos.findOne({
            where: {
                users_id: id
            },
            attributes: ['id']
        });
        const realiza = await realizas.findOne({
            where: {
                users_id: id
            },
            attributes: ['users_id']
        });
        const supervisa = await supervisas.findOne({
            where: {
                users_id: id
            },
            attributes: ['users_id']
        });
        const correo = await correos.findOne({
            where: {
                users_id: id
            },
            attributes: ['users_id']
        });
        rol && await user.removeRoles([rol]);
        depto && await user.removeDepartamentos([depto]);
        correo && await correos.destroy({
            where: {
                users_id: id
            }
        });
        turno && await turnos.destroy({
            where: {
                users_id: id
            }
        });
        realiza && await realizas.destroy({
            where: {
                users_id: id
            }
        });
        supervisa && await supervisas.destroy({
            where: {
                users_id: id
            }
        });
        await usuarios.destroy({
            where: {
                id
            }
        });
        res.json({message: 'Usuario eliminado exitosamente'});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrida un problema durante la eliminación del usuario"});
    }
};

export async function getUsersId(req, res) {
    const {id} = req.params;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id', 'rut', 'nombre', 'apellido','password']
    });
    res.json(user);
};

export async function getAllUsers(req, res) {
    const allUsers = await usuarios.findAll({
        attributes: ['id', 'rut', 'nombre', 'apellido', 'password', 'telefono_casa', 'telefono_celular',],
        include: [
            roles,
            correos
        ],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allUsers});
};

export async function relationDepto(req, res) {
    try{
        const {users_id, n_depto} = req.body;
        const dep = await departamentos.findOne({
            where: {
                n_depto
            },
            include: [
                usuarios
            ],
            attributes: ['id','n_depto']
        });
        let bool;
        dep.dataValues.users.map(user => {
            bool = user.dataValues.id === users_id ? true : false;
        });
        if(!bool){
            const user = await usuarios.findOne({
                where: {
                    id: users_id
                },
                attributes: ['id','rut','nombre','apellido','telefono_casa','password', 'telefono_celular'],
            });
            const depto = await departamentos.findOne({
                where: {
                    n_depto
                },
                attributes: ['id','n_depto']
            });
            user.addDepartamentos([depto]);
            res.json({message: "El departamento se añadio correctamente", user: user, depto: depto, result: true});
        }else{
            res.json({message: "El departamento ingresado ya esta vinculado al usuario", result: false});
        }
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al añadir el departamento", result: false});
    }
};

export async function relationReclamo(req, res) {
    try{
        const token = req.cookies.token;
        !token && res.json({resul: null, message: "Ha ocurrido un problema con el token"});
        const decoded = jwt.verify(token, config.SECRET);
        const user = await usuarios.findOne({
            where: {
                id: decoded.id
            },
            attributes: ['id','rut','nombre','apellido','telefono_casa','password', 'telefono_celular'],
            include:[
                roles
            ]
        });
        const {reclamos_id, cod_rol} = req.body;
        const users_id = decoded.id;
        console.log(cod_rol);
        let relationReclamos;
        if(cod_rol === "usr"){
            relationReclamos = await realizas.create({
                users_id,
                reclamos_id,
            },{
                fields: ['users_id','reclamos_id']
            });
        }else if(cod_rol === "adm"){
            relationReclamos = await supervisas.create({
                users_id,
                reclamos_id,
            },{
                fields: ['users_id','reclamos_id']
            });
        }
        res.json({result: true, relation: relationReclamos, message: "Reclamo relacionado existosamente"});
    }catch(e){
        console.log(e);
        res.json({result: false, relation: relationReclamos, message: "Ha ocurrido un problema al relacionar el reclamo"});
    }
};

export async function updateRelationDepto(req, res) {
    let {users_id, n_depto} = req.body;
    const user = await usuarios.findOne({
        where: {
            id: users_id
        },
        attributes: ['id','rut','nombre', 'apellido']
    });
    const depto = await departamentos.findOne({
        attributes: ['id','n_depto'],
        where: {n_depto}
    });
    n_depto = req.body.newN_depto;
    const newDepto = await departamentos.findOne({
        attributes: ['id','n_depto'],
        where: {n_depto}
    });
    if(user && depto && newDepto){
        user.setDepartamentos([newDepto],[depto]);
        res.json({message: 'Departamento de usuario actualizado correctamente', result: true});
    }else{
        res.json({message: "Ha ocurrido un problema al actualizar la relacion del Departamento", result: false})
    }
};

export async function updateRelationReclamo(req, res) {
    let id = req.body.id;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id','rut','nombre','apellido','telefono_casa','password', 'telefono_celular'],
        include: [
            roles
        ]
    });
    let {reclamos_id, newReclamos_id} = req.body;
    const cod_rol = user.dataValues.roles[0].dataValues.cod_rol;
    console.log(cod_rol);
    let relationReclamos;
    if(cod_rol === "usr"){
        const relationReclamos = await realizas.update({
            newReclamos_id
        },
        {
            where: {reclamos_id}
        });
    }else if(cod_rol === "adm"){
        const users_id = id;
        const relationReclamos = await supervisas.update({
            reclamos_id: newReclamos_id
        },
        {
            where: {users_id, reclamos_id}
        });
    }
    res.json({relation: relationReclamos});
};

export async function updateRelationRoles(req, res) {
    const {users_id, roles_id, newRoles_id} = req.body;
    try{
        const user = await usuarios.findOne({
            where: {
                id: users_id
            },
            attributes: ['id','rut','nombre','apellido','telefono_casa','password', 'telefono_celular'],
            include: [
                roles
            ]
        });
        const rol = await roles.findOne({
            where: {
                id: roles_id
            },
            attributes: ['id','cod_rol','nombre']
        });
        const newRol = await roles.findOne({
            where: {
                id: newRoles_id
            },
            attributes: ['id','cod_rol','nombre']
        });
        user.setRoles([newRol],[rol]);
        res.json("Roles de usuario actualizado correctamente");
    }catch(e){
        console.log(e);
        res.json("A ocurrido un problema al actualizar roles");
    }
};

export async function deleteRelationDepto(req, res) {
    try{
        const {users_id, n_depto} = req.body;
        const depto = await departamentos.findOne({
            attributes: ['id','n_depto'],
            where: {n_depto}
        });
        const user = await usuarios.findOne({
            where: {
                id: users_id
            },
            attributes: ['id','rut','nombre', 'apellido']
        });
        if(depto){
            await user.removeDepartamentos([depto]);
            res.json({message: "Departamento desvinculado exitosamente", result: true});
        }else{
            res.json({message: "El departamento ingresado no se encontró", result: false})
        }
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error el desvincular el departamento ingresado", result: false});
    }
};

export async function getId(req, res) {
    const token = req.cookies.token;
    !token && res.json({resul: null, message: "Ha ocurrido un problema con el token"});
    const decoded = jwt.verify(token, config.SECRET);
    const id = decoded.id;
    const user = await usuarios.findOne({
        where: {
            id
        },
        attributes: ['rut']
    });
    console.log(user);
    res.json({rut: user.dataValues.rut});
};