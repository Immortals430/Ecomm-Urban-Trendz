import { Orders } from "./orders_schema.js";

export default class OrdersRepository {
  async find(user) {
    let orders = await Orders.find({ user }).populate("product");

    // orders = orders.map((elem) => {
    //   return {
    //     quantity: elem.quantity,
    //     price: elem.price,
    //     product: elem.product,
    //     date: elem.date,
    //   };
    // });
    return orders;
  }

  async add(user, cart) {
    const ordersArr = cart.map(({ quantity, product }) => {
      return {
        user,
        quantity,
        price: product.price,
        date: new Date().toLocaleDateString(),
        product: product._id,
      };
    });

    const orders = await Orders.insertMany(ordersArr);
    const populatedOrders = await Orders.find({
      _id: { $in: orders.map((o) => o._id) },
    }).populate("product");


    return populatedOrders;
  }
}
