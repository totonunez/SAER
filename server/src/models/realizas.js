import sequelize from 'sequelize';
import {database} from '../database/database';

const realizas = database.define('realizas',{
    users_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    reclamos_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

export default realizas;