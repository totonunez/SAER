import revisas from '../models/revisas';

export async function getAllRevisas(req, res) {
    const allRevisas = await revisas.findAll({
        attributes: ['roles_id', 'productos_id']
    });
    res.json({allRevisas});
};