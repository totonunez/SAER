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