import realizas from '../models/realizas';

export async function getAllRealizas(req, res) {
    const allRealizas = await realizas.findAll({
        attributes: ['users_id', 'reclamos_id'],
        order: [
            ['users_id', 'DESC']
        ]
    });
    res.json({allRealizas});
};