import express from "express";
const wishlistRouter = express.Router();

import { jwtAuth } from "../../middlewares/jwt_middleware.js";
import WishlistController from "./wishlist_controller.js";
const wishlistController = new WishlistController();


wishlistRouter.get("/get-wishlist",jwtAuth, (req, res, next) => wishlistController.getWishlist(req, res, next))
wishlistRouter.post("/toggle/:item",jwtAuth, (req, res, next) => wishlistController.toggleWishlist(req, res, next))



export default wishlistRouter;