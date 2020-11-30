import usuarios from '../models/users';
import departamentos from '../models/departamentos';
import roles from '../models/roles';
import realizas from '../models/realizas';
import supervisas from '../models/supervisas';
import correos from '../models/correos';
import turnos from '../models/turnos';

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
        const depto = await departamentos.findOne({
            where: {
                id: user.dataValues.departamentos[0].dataValues.id
            },
            attributes: ['id', 'n_depto']
        });
        console.log(user,rol,depto);
        await user.removeRoles([rol]);
        await user.removeDepartamentos([depto]);
        await correos.destroy({
            where: {
                users_id: id
            }
        });
        await turnos.destroy({
            where: {
                users_id: id
            }
        });
        await realizas.destroy({
            where: {
                users_id: id
            }
        });
        await supervisas.destroy({
            where: {
                users_id: id
            }
        });
        await usuarios.destroy({
            where: {
                id
            }
        });
        res.json({message: 'Usuario eliminado'});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrida un problema durante la eliminación del usuario"});
    }
};

export async function getUsersId(req, res) {
    const {id} = req.params;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id', 'rut', 'nombre', 'apellido','password'],
    });
    res.json(user);
};

export async function getAllUsers(req, res) {
    const allUsers = await usuarios.findAll({
        attributes: ['id', 'rut', 'nombre', 'apellido', 'password'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allUsers});
};

export async function relationDepto(req, res) {
    let id = req.body.users_id;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id','rut','nombre','apellido','telefono_casa','password', 'telefono_celular'],
    });
    id = req.body.departamentos_id;
    const depto = await departamentos.findOne({
        where: {id},
        attributes: ['id','n_depto']
    });
    user.addDepartamentos([depto]);
    res.json({user: user, depto: depto});
};

export async function relationReclamo(req, res) {
    let id = req.body.users_id;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id','rut','nombre','apellido','telefono_casa','password', 'telefono_celular'],
        include:[
            roles
        ]
    });
    const {users_id, reclamos_id} = req.body;
    const cod_rol = user.roles[0].dataValues.cod_rol;
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
    res.json({relation: relationReclamos});
};

export async function updateRelationDepto(req, res) {
    let {id, n_depto} = req.body;
    const user = await usuarios.findOne({
        where: {id},
        attributes: ['id','rut','nombre', 'apellido'],
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
    if(user){
        user.setDepartamentos([depto], [newDepto]);
        res.json({message: 'Departamento de usuario actualizado'
        });
    }else{
        res.json({message: "Ha ocurrido un problema"})
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
