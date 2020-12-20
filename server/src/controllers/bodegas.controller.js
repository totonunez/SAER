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

export async function getbodegasId(req, res) {
    const {n_bodega} = req.params;
    const bodega = await bodegas.findOne({
        where: {
            n_bodega
        },
        attributes: ['id', 'capacidad', 'cantidad_actual','n_bodega']
    });
    res.json({bodega, result: true});
};