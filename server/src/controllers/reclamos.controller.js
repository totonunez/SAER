import reclamos from '../models/reclamos';

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
    const {n_reclamo} = req.params;
    const reclamo = await reclamos.findOne({
        where:{
            n_reclamo
        },
        attributes: ['id','n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'fecha_modificacion', 'departamentos_id'],
    });
    res.json({reclamo: reclamo});
};

export async function updateReclamos(req, res) {
    const {n_reclamo, descripcion, respuesta, fecha_ingreso, fecha_modificacion, departamentos_id} = req.body;
    const updateReclamo = await reclamos.update({
        descripcion,
        respuesta,
        fecha_ingreso,
        fecha_modificacion,
        departamentos_id
    },{
        where: {
            n_reclamo: n_reclamo
        } 
    });
    res.json({message: "Reclamo actualizado exitosamente", Reclamo: updateReclamo});
};

export async function deleteCorreos(req, res) {
    const {n_reclamo} = req.body;
    await correos.destroy({
        where: {
            n_reclamo
        }
    });
    res.json({message: "Reclamo eliminado exitosamente"});
};
