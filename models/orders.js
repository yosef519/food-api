import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Orders = database.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: Sequelize.INTEGER,
  storeId: Sequelize.INTEGER,
  orderCost: Sequelize.FLOAT,
  orderAddress: Sequelize.STRING,
  paymentMethod: Sequelize.INTEGER,
});

export default Orders;
