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
