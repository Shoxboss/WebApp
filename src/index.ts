import './common/env';
import Server from './common/server';
import routes from './routes';
import { initDb } from './common/init-db';

const port = parseInt(process.env.PORT ?? '3000');

const main = () => {
  initDb();
  new Server().router(routes).listen(port);
};

export default main();
