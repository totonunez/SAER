import turnos from '../models/turnos';
import users from '../models/users';
import roles from '../models/roles';
import jwt from 'jsonwebtoken';
import config from '../config';

export async function getAllTurnos(req, res) {
    const allTurnos = await turnos.findAll({
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id'],
        order: [
            ['id', 'DESC']
        ], 
        include: [
            users
        ]
    });
    res.json({allTurnos});
};

export async function getTurnosUser(req, res) {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, config.SECRET);
    const users_id = decoded.id;
    const turno = await turnos.findAll({
        where:{
            users_id
        },
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id'],
        include: [
            users
        ]
    });
    res.json({turno});
};

export async function createTurnos(req, res) {
    try{
        const {hora_inicio, hora_termino, fecha_inicio, fecha_termino, rut} = req.body;
        const user = await users.findOne({
            where: {
                rut
            },
            attributes: ['id', "rut"],
            include: [
                roles
            ]
        });
        let bool;
        console.log(user.dataValues.roles.length);
        for(let i = 0; i < user.dataValues.roles.length; i++){
            user.dataValues.roles[i].dataValues.cod_rol === "sup" ? bool = true : bool = false;
        };
        if(bool){
            const turno = await turnos.create({
                hora_inicio,
                hora_termino,
                fecha_inicio,
                fecha_termino,
                users_id: user.dataValues.id
            },{
                fields: ['hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id']
            });
            res.json({message: "Turno creado exitosamente", result: true});
        }else{
            res.json({message: "El rut ingresado no es de un conserje", result: false});
        }
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al ingresar el turno", result: false});
    }
};

export async function updateTurnos(req, res) {
    try{
        const {hora_inicio, hora_termino, fecha_inicio, fecha_termino, id} = req.body;
        const turno = await turnos.update({
            hora_inicio,
            hora_termino,
            fecha_inicio,
            fecha_termino
        },{
            where: {
                id
            }
        });
        res.json({message: "Turno actualizado exitosamente", turno: turno, result: true});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al actualizar el turno", result: false});
    }
};

export async function deleteTurnos(req, res) {
    try{
        const {id} = req.params;
        await turnos.destroy({
            where: {
                id: id
            }
        });
        res.json({message: "Turno eliminado exitosamente", result: true});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al eliminar turnos", result: false});
    }
};

