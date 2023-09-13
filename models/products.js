import Sequelize from "sequelize";
import database from "../utilis/database.js";

const Product = database.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  prodName: Sequelize.STRING,
  prodDesc: Sequelize.STRING,
  prodPrice: Sequelize.FLOAT,
  categoryId: Sequelize.INTEGER,
  storeId: Sequelize.INTEGER,
});

export default Product;

export const getProduct = () => {
  Product.findAll();
};
