import { Wishlist } from "./wishlist_schema.js";

export default class WishlistRepository {
  async findWishlist(user) {
    const wishlists = await Wishlist.find({ user }).populate("product")

    return wishlists;
  }


  async toggle(user, product) {
    let cart = await Wishlist.findOne({ product, user });
    if (!cart) {
      cart = await Wishlist.create({
        user,
        product,
      });
      await cart.populate("product")
      return cart
    } else {
      await cart.deleteOne()
      return { _id: cart._id}
    }
  }
}
