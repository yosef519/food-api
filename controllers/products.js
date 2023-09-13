import express from "express";
import { getProduct } from "../models/products.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await getProduct();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
