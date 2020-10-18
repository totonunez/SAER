import usuarios from '../models/users';

export async function createUsers(req, res) {
    const {rut, nombre, apellido, roles_id} = req.body;
    try{
        let newUsers = await usuarios.create({
            rut,
            nombre,
            apellido,
            roles_id
        },{
            fields: ['rut','nombre','apellido','roles_id']
        });
        newUsers && res.json({message: "Usuario registrado correctamente", data: newUsers});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Problemas al registrar usuario, contactese con el administrador del sistema", data: {}})
    };
};

export async function updateUsers(req, res) {
    const {id} = req.params;
    const {rut, nombre, apellido} =  req.body;
    const users = await usuarios.findOne({
        attributes: ['rut','nombre', 'apellido'],
        where: {id}
    });
    const userUpdate = await usuarios.update({
        rut,
        nombre,
        apellido
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
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id']
    });
    res.json(user);
};

export async function getAllUsers(req, res) {
    const allUsers = await usuarios.findAll({
        attributes: ['id', 'rut', 'nombre', 'apellido', 'roles_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allUsers});
};