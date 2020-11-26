import sequelize from 'sequelize';
import {database} from '../database/database';

const reclamos = database.define('reclamo',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    n_reclamo: {
        type: sequelize.INTEGER
    },
    descripcion:{
        type: sequelize.TEXT
    },
    respuesta:{
        type: sequelize.TEXT
    },
    fecha_ingreso:{
        type: sequelize.DATE
    },
    fecha_modificacion:{
        type: sequelize.DATE
    },
    departamentos_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default reclamos;