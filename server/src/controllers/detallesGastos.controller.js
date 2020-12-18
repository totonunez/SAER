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
    try{
        const {pago_interes, monto_mes, gastos_comunes_id} = req.body;
        console.log(gastos_comunes_id);
        const newDetallesGastos = await detallesGastos.create({
            pago_interes,
            monto_mes,
            gastos_comunes_id
        },{
            fields: ['pago_interes', 'monto_mes','gastos_comunes_id']
        });
        res.json({result: true, message: "Detalle de gasto creado exitosamente"});
    }catch(e){
        console.log(e);
        res.json({result: false, message: "Ha ocurrido un error al ingresas el detalle de gasto"});
    }
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
    try{
        const {gastos_comunes_id} = req.params;
        const detalle = await detallesGastos.findOne({
            where: {
                gastos_comunes_id
            },
            attributes: ['id']
        });
        if(detalle){
            await detallesGastos.destroy({
                where: {
                    gastos_comunes_id
                }
            });
            res.json({message: "Detalle de gasto eliminado exitosamente"});
        }else{
            res.json({message: "Detalle no encontrado"});
        }    
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al eliminar el detalle del gasto"})
    }
};