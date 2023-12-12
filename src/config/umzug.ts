import { Umzug, SequelizeStorage } from 'umzug';
import logger from '../common/logger';
import sequelize from '../common/sequelize';

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: logger,
});

export const runMigrations = async () => {
  await umzug.up();
};
