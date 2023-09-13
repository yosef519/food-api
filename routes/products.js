import express from "express";
import { getAllProduct } from "../controllers/products.js";

export default (router) => {
  router.get("/products/getAllProduct", getAllProduct);
};
