import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./src/features/auth/auth_routes.js";
import errorhandler from "./src/middlewares/error_handler.js";
import { connectDb } from "./src/config/mongoose.js";
import cookieParser from "cookie-parser";
import productRouter from "./src/features/product/product_route.js";
import cartRouter from "./src/features/cart/cart_routes.js";
import wishlistRouter from "./src/features/wishlist/wishlist_route.js";
import ordersRouter from "./src/features/orders/orders_routes.js";
const port = process.env.PORT;
const app = express();

console.log(process.env.CLIENT)
app.use(cors({
  origin: process.env.CLIENT,
  credentials: true,
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
})); 

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("uploads"));




app.get("/", (req, res) => res.end("Bravo"));



app.use("/api/v1/user", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/cart", cartRouter)
app.use("/api/v1/wishlist", wishlistRouter)
app.use("/api/v1/orders", ordersRouter)



app.use(errorhandler)
app.use((req, res) => res.send("wrong api"));

connectDb();
app.listen(port, (err) => {
  console.log(err || `Connected to Server`);
});
