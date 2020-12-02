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
    const movimiento = await movimientos.findOne({
        where:{
            cuentas_corrientes_id
        },
        attributes: ['id', 'nombre_movimiento', 'monto', 'cuentas_corrientes_id'],
    });
    res.json({movimiento: movimiento});
};

export async function createMovimientos(req, res) {
    const {nombre_movimiento, monto, cuentas_corrientes_id} = req.body;
    const newMovimiento = await correos.create({
        nombre_movimiento,
        monto,
        cuentas_corrientes_id
    },{
        fields: ['nombre_movimiento', 'monto', 'cuentas_corrientes_id']
    });
    res.json({message: "Movimiento creado exitosamente", movimiento: newMovimiento});
};

export async function updateMovimientos(req, res) {
    const {id, nombre_movimiento, monto, cuentas_corrientes_id} = req.body;
    const updateMovimiento = await correos.update({
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
    await correos.destroy({
        where: {
            id: id
        }
    });
    res.json({message: "Movimiento eliminado exitosamente"});
};
