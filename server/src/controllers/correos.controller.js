import correos from '../models/correos';
import users from '../models/users';

export async function getAllCorreos(req, res) {
    const allCorreos = await correos.findAll({
        attributes: ['id', 'correo', 'users_id'],
        order: [
            ['id', 'DESC']
        ],
        include: [
            users
        ]
    });
    res.json({allCorreos});
};

export async function getCorreoUserId(req, res) {
    const {users_id} = req.params;
    const correo = await correos.findOne({
        where:{
            users_id
        },
        attributes: ['id', 'correo', 'users_id'],
    });
    res.json({correo: correo});
};

export async function createCorreos(req, res) {
    try{
        const {correo, rut} = req.body;
        const oldCorreo = await correos.findOne({
            where: {
                correo
            },
            attributes: ['id']
        })
        const user = await users.findOne({
            where: {
                rut
            },
            attributes: ['id']
        })
        if(oldCorreo){
            res.json({message: "El correo ingresado ya existe", result: false});
        }else{
            if(user){
                const newCorreo = await correos.create({
                    correo,
                    users_id: user.dataValues.id
                },{
                    fields: ['correo', 'users_id']
                });
                res.json({message: "Correo creado exitosamente", result: true});
            }else{
                res.json({message: "El rut ingresado no existe", result: false});
            }
        }
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un problema al crear el correo", result: true});
    }
};

export async function updateCorreos(req, res) {
    try{
        const {id, correo, users_id} = req.body;
        const updateCorreo = await correos.update({
            correo,
            users_id
        },{
            where: {
                id
            } 
        });
        res.json({message: "Correo actualizado exitosamente", correo: updateCorreo, result: true});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un error al actualizar el correo", result: false});
    }
};

export async function deleteCorreos(req, res) {
    try{
        const {id} = req.params;
        await correos.destroy({
            where: {
                id
            }
        });
        res.json({message: "Correo eliminado exitosamente", result: true});
    }catch(e){
        console.log(e);
        res.json({message: "Ha ocurrido un problema al eliminar el correo", result: false});
    }
};
