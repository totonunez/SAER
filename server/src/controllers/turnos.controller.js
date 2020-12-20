import turnos from '../models/turnos';
import users from '../models/users';
import roles from '../models/roles';

export async function getAllTurnos(req, res) {
    const allTurnos = await turnos.findAll({
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allTurnos});
};

export async function getTurnosDia(req, res) {
    const {fecha_inicio} = req.body;
    const turno = await turnos.findOne({
        where:{
            fecha_inicio
        },
        attributes: ['id', 'hora_inicio', 'hora_termino', 'fecha_inicio', 'fecha_termino', 'users_id'],
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
    const {hora_inicio, hora_termino, fecha_inicio, fecha_termino} = req.body;
    const turno = await roles.update({
        hora_inicio,
        hora_termino,
        fecha_inicio,
        fecha_termino
    },{
        where: {
            fecha_inicio: fecha_inicio
        }
    });
    res.json({message: "Tol actualizado exitosamente", turno: turno});
};

export async function deleteTurnos(req, res) {
    const {id} = req.body;
    await realizas.destroy({
        where: {
            id: id
        }
    });
    res.json({message: "Turno eliminado exitosamente"});
};

