import createHttpError from 'http-errors';
import Users from '../models/User';

export class UsersService {
  async updateBalance(userId: number, amount: number) {
    const user = await Users.findByPk(userId);

    if (!user) throw createHttpError(404, 'User not found');

    if (user.balance + amount < 0)
      throw createHttpError(400, 'Insufficient funds on the account');

    user.balance += amount;
    await user.save();

    return user.balance;
  }
}

export default new UsersService();
