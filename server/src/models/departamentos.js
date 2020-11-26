import sequelize from 'sequelize';
import {database} from '../database/database';

const departamentos = database.define('departamento',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    n_depto: {
        type: sequelize.TEXT
    }
},{
    timestamps: false
});

export default departamentos;