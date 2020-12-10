import gastosComunes from '../models/gastosComunes';
import departamentos from '../models/departamentos';

export async function getAllGastosComunes(req, res) {
    const allGastosComunes = await gastosComunes.findAll({
        attributes: ['id', 'fecha_ingreso', 'fecha_vencimiento', 'gasto_depto', 'gasto_bodega', 'gasto_estacionamiento', 'gasto_agua', 'porcentaje_interes', 'estado', 'departamentos_id'],
        order: [
            ['id', 'DESC']
        ],
        include: [
            departamentos
        ]
    });
    res.json({GastosComunes: allGastosComunes});
};

export async function getGastosComunesFechaIngreso(req, res) {
    const {fecha_ingreso} = req.params;
    const gastoComun = await gastosComunes.findOne({
        where:{
            fecha_ingreso
        },
        attributes: ['id', 'fecha_ingreso', 'fecha_vencimiento', 'gasto_depto', 'gasto_bodega', 'gasto_estacionamiento', 'gasto_agua', 'porcentaje_interes', 'estado', 'departamentos_id'],
    });
    res.json({gastoComun: gastoComun});
};

export async function createGastosComunes(req, res) {
    try{
        const {fecha_ingreso, fecha_vencimiento, gasto_depto, gasto_bodega, gasto_estacionamiento, gasto_agua, porcentaje_interes, estado, departamentos_id} = req.body;
        let aux = parseFloat("0."+porcentaje_interes);
        console.log(porcentaje_interes);
        console.log(aux); 
        const newGastoComun = await gastosComunes.create({
            fecha_ingreso,
            fecha_vencimiento,
            gasto_depto,
            gasto_bodega,
            gasto_estacionamiento,
            gasto_agua,
            porcentaje_interes: aux,
            estado,
            departamentos_id
        },{
            fields: ['fecha_ingreso', 'fecha_vencimiento', 'gasto_depto', 'gasto_bodega', 'gasto_estacionamiento', 'gasto_agua', 'porcentaje_interes', 'estado', 'departamentos_id']
        });
        res.json({message: "Gasto común creado exitosamente", GastoComun: newGastoComun});
    }catch(e){
        console.log(e);
        res.json({
            message: "Ha ocurrido un error al ingresar el gaston común"
        });
    }
};

export async function updateGastosComunes(req, res) {
    const {id, fecha_ingreso, fecha_vencimiento, gasto_depto, gasto_bodega, gasto_estacionamiento, gasto_agua, porcentaje_interes, estado, departamentos_id} = req.body;
    const updateGastoComun = await gastosComunes.update({
        fecha_ingreso,
        fecha_vencimiento,
        gasto_depto,
        gasto_bodega,
        gasto_estacionamiento,
        gasto_agua,
        porcentaje_interes,
        estado,
        departamentos_id
    },{
        where: {
            id
        } 
    });
    res.json({message: "Gasto común actualizado exitosamente", gastoComun: updateGastoComun});
};

export async function deleteGastosComunes(req, res) {
    const {id} = req.params;
    await gastosComunes.destroy({
        where: {
            id
        }
    });
    res.json({message: "Gasto común eliminado exitosamente"});
};
