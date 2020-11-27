import sequelize from 'sequelize';
import {database} from '../database/database';

const detallesGastos = database.define('detalles_gastos',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    pago_interes: {
        type: sequelize.INTEGER
    },
    monto_mes:{
        type: sequelize.INTEGER
    },
    gastos_comunes_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default detallesGastos;