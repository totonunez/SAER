import sequelize from 'sequelize';
import {database} from '../database/database';

const supervisas = database.define('supervisas',{
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

export default supervisas;