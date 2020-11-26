import detallesGastos from '../models/detallesGastos';

export async function getAllDetallesGastos(req, res) {
    const allDetallesGastos = await detallesGastos.findAll({
        attributes: ['id', 'pago_interes', 'monto_mes'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allDetallesGastos});
};