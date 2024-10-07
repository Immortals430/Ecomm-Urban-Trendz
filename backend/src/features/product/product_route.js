import express from "express";
const productRouter = express.Router();
import ProductController from "./product_controller.js";
const productController = new ProductController();


productRouter.post("/getProduct", (req, res, next) => productController.getProduct(req, res, next))


export default productRouter;