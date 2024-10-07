import WishlistRepository from "./wishlist_repository.js";

export default class WishlistController {
  constructor() {
    this.wishlistRepository = new WishlistRepository();
  }

  // get wishlist
  async getWishlist(req, res, next) {
    try {
      // const { page } = req.query;
      // const limit = 12;
      // const skip = (page - 1) * limit;
      const user = req.user.id

      const wishlists = await this.wishlistRepository.findWishlist(user);
      
      res.status(200).json(wishlists);

    } catch (err) {
      console.log("this is rror")
      next(err);
    }
  }


  // add or remove from wishlist
  async toggleWishlist(req, res, next){
    try{
      const user = req.user.id
      const product = req.params.item
 
      const updatedWishlist = await this.wishlistRepository.toggle(user, product)
      res.status(200).json(updatedWishlist)
    }
    catch(err){
      next(err)
    }
  }
}
