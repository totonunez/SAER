import usuarios from '../models/users';
import departamentos from '../models/departamentos';
import reclamos from '../models/reclamos';
import roles from '../models/roles';
import realizas from '../models/realizas';
import supervisas from '../models/supervisas';

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
        attributes: ['id', 'rut', 'nombre', 'apellido','password']
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
        include: [
            roles
        ]
    });
    const {users_id, reclamos_id}= req.body;
    const cod_rol = user.dataValues.roles[0].dataValues.cod_rol;
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