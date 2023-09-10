import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Account = database.define("accounts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  verifyCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isApproved: Sequelize.BOOLEAN,
  avatar: Sequelize.STRING,
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Account;
