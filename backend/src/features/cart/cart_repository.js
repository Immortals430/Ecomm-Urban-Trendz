import { Cart } from "./cart_schema.js";

export default class CartRepository {
  async find(user) {
    let cart = await Cart.find({ user }).populate("product");

    return cart;
  }

  async add(user, productId, quantity) {
    let cart = await Cart.findOne({ product: productId, user }).populate("product");

    if (!cart) {
      cart = await Cart.create({
        user,
        product: productId,
        quantity: Number(quantity),
      });
      cart = await cart.populate("product")
    } else {
      cart.quantity = cart.quantity +  Number(quantity);
      await cart.save();
    }
    return cart;
  }


  async remove(user, productId, quantity) {
    let cart = await Cart.findOne({ product: productId, user }).populate("product");

    if (cart.quantity <= 1 || quantity > 1) {
      await cart.deleteOne();
      return {_id: cart._id}
    } else {
      cart.quantity = cart.quantity - 1;
      await cart.save();
      return cart;
    }
  }


  
  async reset(user) {
    await Cart.deleteMany({ user });
    return 
  }
}
