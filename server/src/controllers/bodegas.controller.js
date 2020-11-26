import bodegas from '../models/bodegas';

export async function getAllbodegas(req, res) {
    const allBodegas = await bodegas.findAll({
        attributes: ['id', 'capacidad', 'cantidad_actual','n_bodega'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allBodegas});
};