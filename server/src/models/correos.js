import sequelize from 'sequelize';
import {database} from '../database/database';

const correos = database.define('correo',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    cod_rol: {
        type: sequelize.TEXT
    },
    nombre:{
        type: sequelize.TEXT
    },
    roles_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default correos;