import sequelize from 'sequelize';
import {database} from '../database/database';

const roles = database.define('rol',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nrol: {
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default roles;