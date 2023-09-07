// בס"ד

import express from "express";
const router = express.Router();

//POST
router.post("/addProduct", (req, res) => {
  const { prodName, prodPrice, prodImage, prodDesc } = req.body;
  return res.status(200).json({
    massage: `the ${prodName} shoes cost a ${prodPrice}$, the image is: ${prodImage}, description: ${prodDesc}`,
  });
});

export default router;
