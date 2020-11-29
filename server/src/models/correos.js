import sequelize from 'sequelize';
import {database} from '../database/database';

const correos = database.define('correo',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    correo:{
        type: sequelize.TEXT
    },
    users_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default correos;