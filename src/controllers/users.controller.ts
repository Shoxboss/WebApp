import { Request, Response, NextFunction } from 'express';
import usersService from '../services/users.service';

export class Controller {
  async balance(req: Request, res: Response, _next: NextFunction) {
    const amount = req.body.amount;
    const userId = parseInt(req.params.userId);

    try {
      const result = await usersService.updateBalance(userId, amount);
      return res.status(200).json(result);
    } catch (error) {
      return _next(error);
    }
  }
}
export default new Controller();
