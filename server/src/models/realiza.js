import sequelize from 'sequelize';
import {database} from '../database/database';

const realiza = database.define('realiz',{
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

export default realiza;