import { model, Schema } from "mongoose";

const productSchema = Schema({
    product: String,
    productName: String,
    price: Number,
    searchImage: String,
    stock: Number,
    type: String,
    category: String,
    brand: String,
    discount: Number,
    rating: Number,
    sizes: String

})

export const Product = model("product", productSchema);