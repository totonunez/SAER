import movimientos from '../models/movimientos';

export async function getAllMovimientos(req, res) {
    const allMovimientos = await movimientos.findAll({
        attributes: ['id', 'nombre_movimiento', 'monto','cuentas_corrientes_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allMovimientos});
};