import reclamos from '../models/reclamos';
import departamentos from '../models/departamentos';
import users from '../models/users';
import sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import config from '../config';

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
    try{
        const {descripcion, departamentos_id} = req.body;
        const decoded = jwt.verify(token, config.SECRET);
        const id = decoded.id;
        const depto = await departamentos.findOne({
            where: {
                id: departamentos_id 
            },
            include: [
                users
            ]
        });
        /*
        const reclamo = await reclamos.create({
            n_reclamo: 0,
            descripcion,
            respuesta: '',
            fecha_ingreso: sequelize.literal('CURRENT_TIMESTAMP'),
            fecha_modificacion: sequelize.literal('CURRENT_TIMESTAMP'),
            departamentos_id
        },{
            fields: ['n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'departamentos_id']
        });
        res.json({result: true, message: "Reclamo creado exitosamente"});*/
        res.json({message: "todo bien", depto})
    }catch(e){
        console.log(e);
        res.json({result: false, message: "Ha ocurrido un error al crear el reclamo"})
    }
};

export async function getReclamosNreclamo(req, res) {
    let {n_reclamo} = req.params;
    const reclamo = await reclamos.findOne({
        where:{
            n_reclamo
        },
        attributes: ['id','n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'departamentos_id'],
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

