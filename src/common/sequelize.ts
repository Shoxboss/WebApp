import { Sequelize } from 'sequelize';

const DATABASE_URL = process.env.DATABASE_URL;

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not defined. Exiting...');
  process.exit(1);
}

const sequelize = new Sequelize(DATABASE_URL!, {
  dialect: 'postgres',
});

export default sequelize;
