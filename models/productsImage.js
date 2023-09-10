import Sequelize from "sequelize";
import database from "../utilis/database.js";

const productImage = database.define("productImage", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productId: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING,
});

export default productImage;
