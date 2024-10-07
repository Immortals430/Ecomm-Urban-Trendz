import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART, userSelector } from "../../redux/reducers/user_reducer";
import { addOrders } from "../../redux/reducers/orders_reducer";
import { useNavigate } from "react-router-dom";
import { resetCartAPI } from "../../api/api";

export default function PaypalButton({ props }) {
  const { cart } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function resetCart() {
    dispatch(addOrders(cart));
    await resetCartAPI();
    dispatch(SET_CART([]));
  }
  console.log(props)
  return (
    <PayPalScriptProvider
      options={{ "client-id": import.meta.env.VITE_APP_PAYPAL_CLIENT_ID }}
    >
      <PayPalButtons
        createOrder={async (data, actions) => {
          try {
            const order = await actions.order.create({
              purchase_units: [
                {
                  amount: { value: props.amount },
                },
              ],
            });
            return order;
          } catch (err) {
            console.error("Error creating order:", err);
          }
        }}
        onApprove={async (data, actions) => {
          try {
            await actions.order.capture();
            if (props.cart) await resetCart();
            else {
              console.log("not a cart")
              dispatch(
                addOrders([
                  {
                    quantity: 1,
                    price: props.singleProduct.price,
                    product: props.singleProduct,
                  },
                ])
              );
            }
            navigate("/orders");
            toast.success("Order Placed");
          } catch (err) {
            console.error("Error capturing order:", err);
          }
        }}
        onError={(err) => {
          console.error("PayPal transaction error:", err);
        }}
      />
    </PayPalScriptProvider>
  );
}
