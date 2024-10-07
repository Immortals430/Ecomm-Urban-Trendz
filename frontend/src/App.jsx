import { Outlet } from "react-router-dom";
import "./sass/styles.scss";
import { useEffect } from "react";
import AppContextProvider from "./AppContext";
import Cookies from "js-cookie";
import { SET_LOGGED_USER } from "./redux/reducers/auth_reducer";
import { useDispatch } from "react-redux";
import { getCartItemAPI, getLoggedUserAPI, getOrdersAPI, getWishlistAPI } from "./api/api";
import { SET_CART, SET_WISHLIST } from "./redux/reducers/user_reducer";
import { SET_ORDERS } from "./redux/reducers/orders_reducer";


function App() {
  const dispatch = useDispatch();

  // check validation on initial render
  useEffect(() => {
    async function fetchLoginStatus() {
      const token = Cookies.get("Urban Trendz");
      if (token) {
        const { data } = await getLoggedUserAPI(token);
        await dispatch(SET_LOGGED_USER(data));
        const cart = await getCartItemAPI();
        await dispatch(SET_CART(cart.data));
        const wishlist = await getWishlistAPI()
        await dispatch(SET_WISHLIST(wishlist.data))
        const orders = await getOrdersAPI()
        await dispatch(SET_ORDERS(orders.data))
      }

    }
    fetchLoginStatus();
  }, []);

  return (
    <>
      
      <AppContextProvider>
        <Outlet />
      </AppContextProvider>
    </>
  );
}

export default App;
