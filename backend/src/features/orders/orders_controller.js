import OrdersRepository from "./orders_repository.js";

export default class OrdersController {
  constructor() {
    this.ordersRepository = new OrdersRepository();
  }

  // get orders
  async getOrders(req, res, next){
    try{
      const user = req.user.id
      const orders = await this.ordersRepository.find(user)

      res.status(200).json(orders)
    }
    catch(err){
      next(err)
    }
  }


  // add orders
  async addOrders(req, res, next) {
    try {
      const user = req.user.id;
      const updatedOrders = await this.ordersRepository.add(user, req.body);
      res.status(200).json(updatedOrders);
    } catch (err) {
      next(err);
    }
  }
}
