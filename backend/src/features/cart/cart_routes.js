import express from "express";
const cartRouter = express.Router();
import CartController from "./cart_controller.js";
import { jwtAuth } from "../../middlewares/jwt_middleware.js";
const cartController = new CartController();


cartRouter.get("/getCartItems",jwtAuth, (req, res, next) => cartController.getCartItems(req, res, next))
cartRouter.post("/add", jwtAuth, (req, res, next) => cartController.addItem(req, res, next))
cartRouter.post("/remove", jwtAuth, (req, res, next) => cartController.removeItem(req, res, next))
cartRouter.post("/reset", jwtAuth, (req, res, next) => cartController.resetCart(req, res, next))



export default cartRouter;