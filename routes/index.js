import express from "express";
const router = express.Router();

//IMPORT TOUTER PAGES
import categories from "./categories.js";
import products from "./products.js";

export default () => {
  categories(router);
  products(router);
  return router;
};
