import reclamos from '../models/reclamos';
import departamentos from '../models/departamentos';
import users from '../models/users';
import sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import config from '../config';
import realizas from '../models/realizas'

export async function getAllReclamos(req, res) {
    const allReclamos = await reclamos.findAll({
        attributes: ['id', 'n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'departamentos_id'],
        order: [
            ['id', 'DESC']
        ],
        include: [
            realizas
        ]
    });
    res.json({allReclamos});
};

export async function createReclamos(req, res){ 
    try{
        const token = req.cookies.token;
        const {descripcion, n_depto} = req.body;
        const decoded = jwt.verify(token, config.SECRET);
        const id = decoded.id;
        let bool = false;
        const depto = await departamentos.findOne({
            where: {
                n_depto 
            },
            include: [
                users
            ]
        });
        console.log(depto.dataValues.users[0].dataValues.id, id);
        if(depto){
            depto.dataValues.users.map((user) => {
                bool = user.dataValues.id == id && true;
            });
            if(bool){
                const reclamo = await reclamos.create({
                    n_reclamo: 0,
                    descripcion,
                    respuesta: '',
                    fecha_ingreso: sequelize.literal('CURRENT_TIMESTAMP'),
                    fecha_modificacion: sequelize.literal('CURRENT_TIMESTAMP'),
                    departamentos_id: depto.dataValues.id
                },{
                    fields: ['n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'departamentos_id']
                });
                res.json({result: true, message: "Reclamo creado exitosamente", reclamo});
            }else{
                res.json({result: false, message: "Hubo un error al vincular el usuario con el departamento"});
            }
        }else{
            res.json({result: false, message: "Reclamo creado exitosamente"});
        }
    }catch(e){
        console.log(e);
        res.json({result: false, message: "Ha ocurrido un error al crear el reclamo"})
    }
};

export async function getReclamosNreclamo(req, res) {
    let {n_reclamo} = req.params;
    const reclamo = await reclamos.findOne({
        where:{
            id: n_reclamo
        },
        attributes: ['id','n_reclamo', 'descripcion', 'respuesta', 'fecha_ingreso', 'fecha_modificacion', 'departamentos_id'],
    });
    res.json({reclamo: reclamo});
};

export async function updateReclamos(req, res) {
    try{
        const {reclamos_id, respuesta} = req.body;
        const updateReclamo = await reclamos.update({
            fecha_modificacion: sequelize.literal('CURRENT_TIMESTAMP'),
            respuesta
        },{
            where: {
                id: reclamos_id
            } 
        });
        res.json({result: true, message: "Reclamo actualizado exitosamente", Reclamo: updateReclamo});
    }catch(e){
        console.log(e);
        res.json({result: false, message: "Error al actualizar reclamo", Reclamo: updateReclamo})
    }
};

