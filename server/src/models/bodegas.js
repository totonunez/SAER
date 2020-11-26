import sequelize from 'sequelize';
import {database} from '../database/database';

const bodegas = database.define('bodega',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    capacidad: {
        type: sequelize.INTEGER
    },
    cantidad_actual:{
        type: sequelize.INTEGER
    },
    n_bodega:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default bodegas;