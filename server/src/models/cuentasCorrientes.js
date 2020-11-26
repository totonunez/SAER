import sequelize from 'sequelize';
import {database} from '../database/database';

const cuentas_corrientes = database.define('cuentas_corriente',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    deuda_total: {
        type: sequelize.INTEGER
    },
    abono:{
        type: sequelize.INTEGER
    },
    total_pago:{
        type: sequelize.INTEGER
    },
    n_cuenta:{
        type: sequelize.INTEGER
    },
    departamentos_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default cuentas_corrientes;