import sequelize from './sequelize'; // Adjust the path based on your project structure
import User from '../models/User';

export const initDb = async () => {
  try {
    await User.sync();

    const user = await User.findByPk(1234567890);

    if (!user) {
      await User.create({
        balance: 1000,
        id: 1234567890,
      });
    } else {
      user.balance = 1000;
      await user.save();
    }

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
    await sequelize.close();
  } finally {
  }
};
