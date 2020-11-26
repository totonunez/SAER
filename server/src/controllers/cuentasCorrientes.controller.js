import cuentas_corrientes from '../models/cuentasCorrientes';

export async function getAllCuentasCorrientes(req, res) {
    const allCuentasCorrientes = await cuentas_corrientes.findAll({
        attributes: ['id', 'deuda_total', 'abono','total_pago','departamentos_id'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allCuentasCorrientes});
};