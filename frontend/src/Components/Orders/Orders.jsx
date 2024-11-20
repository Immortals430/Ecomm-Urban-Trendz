import { useSelector } from "react-redux";
import { ordersSelector } from "../../redux/reducers/orders_reducer";
import { authSelector } from "../../redux/reducers/auth_reducer";
import emptyBox from "../../assets/nothing_found.png";

export default function Orders() {
  const { orders } = useSelector(ordersSelector);
  const { loggedUser } = useSelector(authSelector);

  return (
    <section className="orders-sec">
      <h1>My orders</h1>

      <div className="orders">
        {loggedUser._id && orders.length == 0 ? (
          <img src={emptyBox} className="emptyBox"/>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="text-left">Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((elem) => (
                <tr key={elem._id}>
                  <td className="text-left">{elem.product.product}</td>
                  <td>{elem.quantity}</td>
                  <td>{elem.price * elem.quantity}</td>
                  <td>{elem.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
