import Sequelize from "sequelize";
import database from "../utilis/database.js";

const categories = database.define("categories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: Sequelize.STRING,
  categoryImage: Sequelize.STRING,
  categoryOrder: Sequelize.INTEGER,
  categoryDesc: Sequelize.STRING,
});

export default categories;

export const getCategories = () => categories.findAll();
export const getCategoryById = (id) => {};
export const addNewCategory = (category) =>
  categories.create(category).then((cat) => {
    cat;
  });
export const updateCategoryById = (id) => {};
export const deleteCategoryById = (id) => {};
