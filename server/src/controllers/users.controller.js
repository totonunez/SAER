import usuarios from '../models/users';

export async function createUsers(req, res) {
    const {rut, nombre, apellido, roles_id} = req.body;
    try{
        let newUsers = await usuarios.create({
            rut,
            nombre,
            apellido,
            roles_id
        },{
            fields: ['rut','nombre','apellido','roles_id']
        });
        newUsers && res.json({message: "Usuario registrado correctamente", data: newUsers});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Problemas al registrar usuario, contactese con el administrador del sistema", data: {}})
    };
};