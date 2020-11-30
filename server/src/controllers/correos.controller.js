import correos from '../models/correos';

export async function getAllCorreos(req, res) {
    const allCorreos = await correos.findAll({
        attributes: ['id', 'correo', 'users_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allCorreos});
};

export async function getCorreoUserId(req, res) {
    const {users_id} = req.params;
    const correo = await turnos.findOne({
        where:{
            users_id
        },
        attributes: ['id', 'correo', 'users_id'],
    });
    res.json({correo: correo});
};

export async function createCorreos(req, res) {
    const {correo, users_id} = req.body;
    const newCorreo = await roles.create({
        correo,
        users_id
    },{
        fields: ['id', 'correo', 'users_id']
    });
    res.json({message: "Correo creado exitosamente", correo: newCorreo});
};

export async function updateCorreos(req, res) {
    const {id, correo, users_id} = req.body;
    const updateCorreo = await roles.update({
        correo,
        users_id
    },{
        where: {
            id: id
        } 
    });
    res.json({message: "Correo actualizado exitosamente", correo: updateCorreo});
};

export async function deleteCorreos(req, res) {
    const {id} = req.params;
    await correos.destroy({
        where: {
            id: id
        }
    });
    res.json({message: "Correo eliminado exitosamente"});
};
