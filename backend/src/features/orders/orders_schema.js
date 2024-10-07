import { model, Schema } from "mongoose";

const ordersSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "auth",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Orders = model("orders", ordersSchema);
