import reclamos from '../models/reclamos';
import sequelize from 'sequelize';

export async function getAllReclamos(req, res) {
    const allReclamos = await reclamos.findAll({
        attributes: ['id', 'n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'departamentos_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allReclamos});
};

export async function createReclamos(req, res){ 
    const {n_reclamo, descripcion, respuesta, fecha_ingreso, fecha_modificacion, departamentos_id} = req.body;
    const reclamo = await reclamos.create({
        n_reclamo,
        descripcion,
        respuesta,
        fecha_ingreso,
        fecha_modificacion,
        departamentos_id
    },{
        fields: ['n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'fecha_modificacion', 'departamentos_id']
    });
    res.json({reclamo});
};

export async function getReclamosNreclamo(req, res) {
    let {n_reclamo} = req.params;
    const reclamo = await reclamos.findOne({
        where:{
            n_reclamo
        },
        attributes: ['id','n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'fecha_modificacion', 'departamentos_id'],
    });
    res.json({reclamo: reclamo});
};

export async function updateReclamos(req, res) {
    try{
        const {n_reclamo, respuesta} = req.body;
        console.log(n_reclamo, respuesta);
        const updateReclamo = await reclamos.update({
            fecha_modificacion: sequelize.literal('CURRENT_TIMESTAMP'),
            respuesta
        },{
            where: {
                n_reclamo: n_reclamo
            } 
        });
        res.json({result: true, message: "Reclamo actualizado exitosamente", Reclamo: updateReclamo});
    }catch(e){
        console.log(e);
        res.json({result: false, message: "Error al actualizar reclamo", Reclamo: updateReclamo})
    }
};

