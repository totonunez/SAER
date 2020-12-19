import supervisas from '../models/supervisas';
import users from '../models/users';

export async function getAllSupervisas(req, res) {
    const allSupervisas = await supervisas.findAll({
        attributes: ['users_id', 'reclamos_id',],
        order: [
            ['users_id', 'DESC']
        ]
    });
    res.json({allSupervisas});
};

export async function getSupervisasId(req, res) {
    const {reclamos_id} = req.params;
    const idSupervisas = await supervisas.findOne({
        where: {
            reclamos_id
        },
        attributes: ['users_id', 'reclamos_id',],
        include: [
            users
        ]
    });
    res.json({idSupervisas});
};