import turnos from '../models/turnos';

export async function getAllTurnos(req, res) {
    const allTurnos = await turnos.findAll({
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allTurnos});
};

export async function getTurnosDia(req, res) {
    const {fecha_inicio} = req.body;
    const turno = await turnos.findOne({
        where:{
            fecha_inicio
        },
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id'],
    });
    res.json({turno});
};

export async function createTurnos(req, res) {
    const {hora_inicio, hora_termino, fecha_inicio, fecha_termino, users_id} = req.body;
    const turno = await roles.create({
        hora_inicio,
        hora_termino,
        fecha_inicio,
        fecha_termino,
        users_id
    },{
        fields: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id']
    });
    res.json({message: "Turno creado exitosamente", turno: turno});
};

export async function updateTurnos(req, res) {
    const {hora_inicio, hora_termino, fecha_inicio, fecha_termino} = req.body;
    const turno = await roles.update({
        hora_inicio,
        hora_termino,
        fecha_inicio,
        fecha_termino
    },{
        where: {
            fecha_inicio: fecha_inicio
        }
    });
    res.json({message: "Tol actualizado exitosamente", turno: turno});
};

export async function deleteTurnos(req, res) {
    const {id} = req.body;
    await realizas.destroy({
        where: {
            id: id
        }
    });
    res.json({message: "Turno eliminado exitosamente"});
};

