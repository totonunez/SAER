import sequelize from 'sequelize';
import {database} from '../database/database';

const movimientos = database.define('movimiento',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre_movimiento: {
        type: sequelize.TEXT
    },
    monto:{
        type: sequelize.INTEGER
    },
    cuentas_corrientes_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default movimientos;