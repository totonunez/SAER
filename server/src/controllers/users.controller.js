import usuarios from '../models/users';
import departamentos from '../models/departamentos';
import roles from '../models/roles';
import realizas from '../models/realizas';
import supervisas from '../models/supervisas';
import correos from '../models/correos';
import turnos from '../models/turnos';

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
            password: password
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
