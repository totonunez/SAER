import movimientos from '../models/movimientos';

export async function getAllMovimientos(req, res) {
    const allMovimientos = await movimientos.findAll({
        attributes: ['id', 'nombre_movimiento', 'monto','cuentas_corrientes_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({Movimientos: allMovimientos});
};

export async function getMovimientosCuentasCorrientesId(req, res) {
    const {cuentas_corrientes_id} = req.params;
    const movimiento = await movimientos.findAll({
        where:{
            cuentas_corrientes_id
        },
        attributes: ['id', 'nombre_movimiento', 'monto', 'cuentas_corrientes_id'],
    });
    res.json({movimiento: movimiento});
};

export async function createMovimientos(req, res) {
    const {nombre_movimiento, monto, cuentas_corrientes_id} = req.body;
    const newMovimiento = await movimientos.create({
        nombre_movimiento,
        monto,
        cuentas_corrientes_id
    },{
        fields: ['nombre_movimiento', 'monto', 'cuentas_corrientes_id']
    });
    res.json({message: "Movimiento creado exitosamente", movimiento: newMovimiento, result: true});
};

export async function updateMovimientos(req, res) {
    const {id, nombre_movimiento, monto, cuentas_corrientes_id} = req.body;
    const updateMovimiento = await movimientos.update({
        nombre_movimiento,
        monto,
        cuentas_corrientes_id
    },{
        where: {
            id: id
        } 
    });
    res.json({message: "Movimiento actualizado exitosamente", movimiento: updateMovimiento});
};

export async function deleteMovimientos(req, res) {
    const {id} = req.params;
    const drop = await movimientos.destroy({
        where: {
            id: id
        }
    });
    drop ? res.json({message: "Movimiento eliminado exitosamente", result: true}) : res.json({message: "Movimiento no encontrado", result: false})
};
