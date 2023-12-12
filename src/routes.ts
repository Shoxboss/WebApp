import { Application } from 'express';
import usersRouter from './routes/users.route';

export default function routes(app: Application): void {
  app.use('/api/v1/users', usersRouter);
}
