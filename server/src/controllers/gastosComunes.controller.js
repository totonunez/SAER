import gastosComunes from '../models/gastosComunes';

export async function getAllGastosComunes(req, res) {
    const allGastosComunes = await gastosComunes.findAll({
        attributes: ['id', 'fecha_ingreso', 'fecha_vencimiento', 'gasto_depto', 'gasto_bodega', 'gasto_estacionamiento', 'gasto_agua', 'porcentaje_interes', 'estado'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allGastosComunes});
};