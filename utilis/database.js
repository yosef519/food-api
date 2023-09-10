import { Sequelize } from "sequelize";

const connection = new Sequelize(
  "food_db", //Name of database
  "root", //Username
  "yosef8888", //Password
  {
    dialect: "mysql",
    hose: "localhost",
  }
);

export default connection;
