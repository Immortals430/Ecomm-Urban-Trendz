import express from "express";
const authRouter = express.Router();
import AuthController from "./auth_controller.js";
import { jwtAuth } from "../../middlewares/jwt_middleware.js";
import multer from "multer";
const authController = new AuthController();
const upload = multer();
import verifyToken from "../../middlewares/google_auth_library.js";

authRouter.post("/signup", (req, res, next) =>
  authController.signup(req, res, next)
);
authRouter.get("/confirm-signup/:id", (req, res, next) =>
  authController.confirmSignup(req, res, next)
);
authRouter.post("/signin", (req, res, next) =>
  authController.signin(req, res, next)
);

authRouter.post("/google-login", verifyToken, (req, res, next) =>
  authController.googleLogin(req, res, next)
);

authRouter.get("/get-login-status/:jwtToken", (req, res, next) =>
  authController.getLoggedInStatus(req, res, next)
);

authRouter.put("/update-user/", jwtAuth, (req, res, next) =>
  authController.updateUser(req, res, next)
);
authRouter.post("/send-otp", (req, res, next) =>
  authController.sendOtp(req, res, next)
);
authRouter.post("/change-password", (req, res, next) =>
  authController.changePassword(req, res, next)
);

export default authRouter;
