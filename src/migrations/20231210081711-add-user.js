'use strict';

const userId = 1234567890;
const updatedBalance = 1000;

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
    balance: {
      defaultValue: 1000,
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  await queryInterface.bulkInsert(
    'users',
    {
      id: userId,
      balance: updatedBalance,
      username: 'username',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {}
  );
}
export async function down() {
  await queryInterface.bulkDelete('users', { id: userId });
}
