import express from "express";
const ordersRouter = express.Router();
import OrdersController from "./orders_controller.js";
import { jwtAuth } from "../../middlewares/jwt_middleware.js";
const ordersController = new OrdersController();

ordersRouter.get("/get-orders", jwtAuth, (req, res, next) =>
  ordersController.getOrders(req, res, next)
);
ordersRouter.post("/add-orders", jwtAuth, (req, res, next) =>
  ordersController.addOrders(req, res, next)
);

export default ordersRouter;
