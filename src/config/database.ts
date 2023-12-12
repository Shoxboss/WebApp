type Config = {
  [key: string | 'development' | 'production' | 'test']: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
  };
};

const config: Config = {
  development: {
    username: 'username',
    password: 'password',
    database: 'database',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'username',
    password: 'password',
    database: 'database',
    host: 'localhost',
    dialect: 'postgres',
  },
};

export default config;
