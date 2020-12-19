import realizas from '../models/realizas';
import users from '../models/users';

export async function getAllRealizas(req, res) {
    const allRealizas = await realizas.findAll({
        attributes: ['users_id', 'reclamos_id'],
        order: [
            ['users_id', 'DESC']
        ]
    });
    res.json({allRealizas});
};

export async function getRealizasId(req, res) {
    const {reclamos_id} = req.params;
    console.log(reclamos_id);
    const idRealizas = await realizas.findOne({
        where: {
            reclamos_id
        },
        attributes: ['users_id', 'reclamos_id',],
        include: [
            users
        ]
    });
    res.json({idRealizas});
};