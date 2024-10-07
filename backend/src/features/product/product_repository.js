import { Product } from "./product_schema.js";

export default class ProductRepository {
  async findProduct(id, type, category, brands, discount, price, rating, limit, skip) {
    let searchCondition = {};
    if(id) searchCondition._id = id
    if (type) searchCondition.type = type;
    if (category) searchCondition.category = category;
    if (brands && brands.length > 0) searchCondition.brand = {$in: brands};
    if (price) searchCondition.price = { $lte: price }
    if (discount) searchCondition.discount = { $lt: discount }
    if (rating) searchCondition.rating = rating

    const products = await Product.find( searchCondition )
      .skip(skip)
      .limit(limit);

    
    return products;
  }
}
