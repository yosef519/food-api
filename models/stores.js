import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Stores = database.define("stores", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  storeName: Sequelize.STRING,
  storeAddress: Sequelize.STRING,
  storePhone: Sequelize.STRING,
  storeHours: Sequelize.STRING,
  storeLogo: Sequelize.STRING,
  storeCity: Sequelize.STRING,
  storeEmail: Sequelize.STRING,
  categoryId: Sequelize.INTEGER,
});

export default Stores;
