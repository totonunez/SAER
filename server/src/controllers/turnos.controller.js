import turnos from '../models/turnos';

export async function getAllTurnos(req, res) {
    const allTurnos = await turnos.findAll({
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'roles_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allTurnos});
};