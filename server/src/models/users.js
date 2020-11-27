import sequelize from 'sequelize';
import {database} from '../database/database';

const users = database.define('user', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    rut: {
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    },
    apellido:{
        type: sequelize.TEXT
    },
    telefono_casa:{
        type: sequelize.INTEGER
    },
    password:{
        type: sequelize.TEXT
    },
    telefono_celular:{
        type: sequelize.INTEGER
    },
},{
    timestamps: false
});

export default users;