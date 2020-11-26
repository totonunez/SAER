import sequelize from 'sequelize';
import {database} from '../database/database';

const gastosComunes = database.define('gastosComune',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    fecha_ingreso: {
        type: sequelize.DATE
    },
    fecha_vencimiento:{
        type: sequelize.DATE
    },
    gastos_depto:{
        type: sequelize.INTEGER
    },
    gastos_bodega:{
        type: sequelize.INTEGER
    },
    gastos_estacionamiento:{
        type: sequelize.INTEGER
    },
    gastos_agua:{
        type: sequelize.INTEGER
    },
    porcentaje_interes:{
        type: sequelize.INTEGER
    },
    estado:{
        type: sequelize.BOOLEAN
    },
    departamentos_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default gastosComunes;