import departamentos from '../models/departamentos';
import users from '../models/users';

export async function getAllDepartamentos(req, res) {
    const allDepartamentos = await departamentos.findAll({
        attributes: ['id', 'n_depto'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allDepartamentos});
};

export async function getDepartamentosNdepto(req, res) {
    const {n_depto} = req.params;
    const depto = await departamentos.findOne({
        where:{
            n_depto
        },
        attributes: ['id', 'n_depto'],
        include: [
            users
        ]
    });
    depto ? res.json({result: true, depto: depto}) : res.json({result: false});
};

export async function createDepartamentos(req, res) {
    const {n_depto} = req.body;
    const newDepto = await departamentos.create({
        n_depto
    },{
        fields: ['n_depto']
    });
    res.json({message: "Departamento creado exitosamente", depto: newDepto});
};

export async function updateDepartamentos(req, res) {
    const {id, n_depto} = req.body;
    const updateDepto = await departamentos.update({
        n_depto
    },{
        where: {
            id: id
        } 
    });
    res.json({message: "Departamento actualizado exitosamente", depto: updateDepto});
};

export async function deleteDepartamentos(req, res) {
    const {id} = req.params;
    await departamentos.destroy({
        where: {
            id: id
        }
    });
    res.json({message: "Departamento eliminado exitosamente"});
};
