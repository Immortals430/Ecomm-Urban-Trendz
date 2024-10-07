import { model, Schema } from "mongoose";

const wishlistSchema = Schema({
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

})

export const Wishlist = model("wishlist", wishlistSchema);