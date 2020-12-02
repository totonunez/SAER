import detallesGastos from '../models/detallesGastos';

export async function getAllDetallesGastos(req, res) {
    const allDetallesGastos = await detallesGastos.findAll({
        attributes: ['id', 'pago_interes', 'monto_mes'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({DetallesGastos: allDetallesGastos});
};

export async function getDetallesGastosId(req, res) {
    const {gastos_comunes_id} = req.params;
    const detallesGasto = await detallesGastos.findOne({
        where:{
            gastos_comunes_id
        },
        attributes: ['id', 'pago_interes', 'monto_mes', 'gastos_comunes_id'],
    });
    res.json({detallesGasto: detallesGasto});
};

export async function createDetallesGastos(req, res) {
    const {pago_interes, monto_mes, gastos_comunes_id} = req.body;
    const newDetallesGastos = await detallesGastos.create({
        pago_interes,
        monto_mes,
        gastos_comunes_id
    },{
        fields: ['id', 'pago_interes', 'monto_mes','gastos_comunes_id']
    });
    res.json({message: "Detalle de gasto creado exitosamente", detallesGastos: newDetallesGastos});
};

export async function updateDetallesGastos(req, res) {
    const {id, pago_interes, monto_mes, departamentos_id} = req.body;
    const updateGastoComun = await detallesGastos.update({
        pago_interes,
        monto_mes,
        gastos_comunes_id
    },{
        where: {
            id
        } 
    });
    res.json({message: "Detalle de gasto actualizado exitosamente", gastoComun: updateGastoComun});
};

export async function deleteDetallesGastos(req, res) {
    const {id} = req.params;
    await detallesGastos.destroy({
        where: {
            id
        }
    });
    res.json({message: "Detalle de gasto eliminado exitosamente"});
};