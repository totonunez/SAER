import cuentas_corrientes from '../models/cuentasCorrientes';
import departamentos from '../models/departamentos';

export async function getAllCuentasCorrientes(req, res) {
    const allCuentasCorrientes = await cuentas_corrientes.findAll({
        attributes: ['id', 'deuda_total', 'abono','total_pago','departamentos_id','n_cuenta'],
        include: [
            departamentos
        ],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allCuentasCorrientes});
};

export async function getCuentasCorrientesNcuenta(req, res) {
    const {n_cuenta} = req.params;
    const cuentaCorriente = await cuenta_corrientes.findOne({
        where:{
            n_cuenta
        },
        attributes: ['id', 'deuda_total', 'abono', 'total_pago', 'n_cuenta', 'departamentos_id'],
    });
    res.json({cuentaCorriente: cuentaCorriente});
};

export async function createCuentasCorrientes(req, res) {
    const {deuda_total, abono, total_pago, n_cuenta, departamentos_id} = req.body;
    console.log(departamentos_id);
    const newCuentaCorriente = await cuentas_corrientes.create({
        deuda_total,
        abono,
        total_pago,
        n_cuenta,
        departamentos_id
    },{
        fields: ['id', 'deuda_total', 'abono', 'total_pago', 'n_cuenta', 'departamentos_id']
    });
    res.json({message: "Cuenta corriente creada exitosamente", cuentaCorriente: newCuentaCorriente});
};

export async function updateCuentasCorrientes(req, res) {
    const {deuda_total, abono, total_pago, n_cuenta, departamentos_id} = req.body;
    const updateCuentaCorriente = await cuentas_corrientes.update({
        deuda_total,
        abono,
        total_pago,
        n_cuenta,
        departamentos_id
    },{
        where: {
            n_cuenta
        } 
    });
    res.json({message: "Cuenta corriente actualizada exitosamente", cuenta: updateCuentaCorriente, result: true});
};

export async function deleteCuentasCorrientes(req, res) {
    const {id} = req.params;
    await cuentas_corrientes.destroy({
        where: {
            id
        }
    });
    res.json({message: "Cuenta corriente eliminada exitosamente"});
};