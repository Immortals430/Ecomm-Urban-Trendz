import ProductRepository from "./product_repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  // get products
  async getProduct(req, res, next) {
    try {
      const { id, type, category, brands, discount, price, rating, page } = req.body;
      const limit = 12;
      const skip = (page - 1) * limit;

      const products = await this.productRepository.findProduct(
        id,
        type,
        category,
        brands,
        discount,
        price,
        rating,
        limit,
        skip
      );

      res.status(200).json({ page, products });
    } catch (err) {
      console.log("this is error");
      next(err);
    }
  }
}
