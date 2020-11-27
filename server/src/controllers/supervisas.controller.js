import supervisas from '../models/supervisas';

export async function getAllSupervisas(req, res) {
    const allSupervisas = await supervisas.findAll({
        attributes: ['users_id', 'reclamos_id',],
        order: [
            ['users_id', 'DESC']
        ]
    });
    res.json({allSupervisas});
};