import sequelize from 'sequelize';
import {database} from '../database/database';

const revisa = database.define('revis',{
    roles_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    productos_id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

export default revisa;