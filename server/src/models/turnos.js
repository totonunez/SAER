import sequelize from 'sequelize';
import {database} from '../database/database';

const turnos = database.define('turno',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    hora_inicio: {
        type: sequelize.TIME
    },
    hora_termino:{
        type: sequelize.TIME
    },
    fecha_inicio:{
        type: sequelize.DATE
    },
    fecha_termino:{
        type: sequelize.DATE
    },
    users_id:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});

export default turnos;