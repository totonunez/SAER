import sequelize from 'sequelize';
import {database} from '../database/database';

const productos = database.define('producto',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    cantidad: {
        type: sequelize.TEXT
    },
    cod_prod:{
        type: sequelize.TEXT
    },
    fecha_modificacion:{
        type: sequelize.DATE
    },
    nombre:{
        type: sequelize.TEXT
    },
    volumen:{
        type: sequelize.TEXT
    },
    bodegas_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default productos;