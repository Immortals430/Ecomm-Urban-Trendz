import { model, Schema } from "mongoose";

const cartSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "auth",
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

export const Cart = model("cart", cartSchema)
