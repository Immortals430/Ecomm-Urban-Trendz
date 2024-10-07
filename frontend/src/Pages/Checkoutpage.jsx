import { useLocation } from "react-router-dom";
import PaypalButton from "../Components/Paypal/PaypalButton";

export default function Checkoutpage() {
  const location = useLocation();
  const { amount, cart, singleProduct } = location.state || {};

  return (
    <>
      <div className="checkoutpage">
        <h1> Paypal payment gateway</h1>
        <h2>
          Your tota order is of $
          {amount}
        </h2>
        <PaypalButton props={{amount, cart, singleProduct}} />
        Note:
        <i>
          {" "}
          This payment gateway is just for demo purpose. Do not enter your
          original credentials
        </i>
      </div>
    </>
  );
}
