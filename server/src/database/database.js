import sequelize from 'sequelize';

export const database = new sequelize(
    'db_02',
    'postgres',
    'pass123',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        },
        logging: false
    }
)