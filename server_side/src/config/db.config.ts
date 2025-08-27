import { Sequelize } from 'sequelize'
import envConfig from './env.config'


export const sequelize = new Sequelize(envConfig.database!, envConfig.username!, envConfig.password!, {
    host: envConfig.host!,
    dialect: envConfig.dialect as any
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};

