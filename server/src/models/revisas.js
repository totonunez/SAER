import sequelize from 'sequelize';
import {database} from '../database/database';

const revisas = database.define('revisa',{
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

export default revisas;