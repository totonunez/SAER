import sequelize from 'sequelize';
import {database} from '../database/database';

const gastosComunes = database.define('gastos_comunes',{
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
    gasto_depto:{
        type: sequelize.INTEGER
    },
    gasto_bodega:{
        type: sequelize.INTEGER
    },
    gasto_estacionamiento:{
        type: sequelize.INTEGER
    },
    gasto_agua:{
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