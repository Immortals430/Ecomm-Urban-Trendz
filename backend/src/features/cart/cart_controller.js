import CartRepository from "./cart_repository.js";

export default class CartController{
  constructor(){
    this.cartRepository = new CartRepository()
  }

  // get cart item
  async getCartItems(req, res, next){
    try{
      const user = req.user.id
      const cartItems = await this.cartRepository.find(user)
      res.status(200).json(cartItems)
    }
    catch(err){
      next(err)
    }
  }

  // add item to cart
  async addItem(req, res, next){
    try{
      const user = req.user.id
      const {productId, quantity} = req.query

      const updatedCart = await this.cartRepository.add(user, productId, quantity)
      res.status(200).json(updatedCart)
    }
    catch(err){
      next(err)
    }
  }


  // remove item from cart
  async removeItem(req, res, next){
    try{
      const user = req.user.id
      const {productId, quantity} = req.query

      const updatedCart = await this.cartRepository.remove(user,  productId, quantity)
      res.status(200).json(updatedCart)
    }
    catch(err){
      next(err)
    }
  }


  // reset cart
  async resetCart(req, res, next){
    try{
      const user = req.user.id
  
      await this.cartRepository.reset(user)
      res.status(200).json({ message: "cart reset successful"})
    }
    catch(err){
      next(err)
    }
  }
  
  
}

