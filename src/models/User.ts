// models/User.js

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../common/sequelize';

type UserAttributes = {
  id: number;
  balance: number;
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare balance: number;
}

User.init(
  {
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
  },
  {
    tableName: 'users',
    sequelize: sequelize,
  }
);

sequelize.sync();

export default User;
