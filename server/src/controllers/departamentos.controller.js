import departamentos from '../models/departamentos';

export async function getAllDepartamentos(req, res) {
    const allDepartamentos = await departamentos.findAll({
        attributes: ['id', 'n_depto'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allDepartamentos});
};