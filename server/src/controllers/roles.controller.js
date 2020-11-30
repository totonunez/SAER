import roles from '../models/roles';

export async function getAllRoles(req, res) {
    const allRoles = await roles.findAll({
        attributes: ['id', 'cod_rol', 'nombre'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allRoles});
};

export async function getRolesCodRol(req, res) {
    const {cod_rol} = req.params
    const rol = await roles.findOne({
        where:{
            cod_rol
        },
        attributes: ['id', 'cod_rol', 'nombre']
    });
    res.json({rol: rol});
};

export async function updateRoles(req, res) {
    const {cod_rol, nombre} = req.body;
    const rol = await roles.update({
        nombre
    },{
        where: {
            cod_rol: cod_rol
        }
    });
    res.json({message: "Rol actualizado exitosamente"});
};

