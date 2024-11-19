import axios from "axios";
export const baseURL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:8000";

const API = axios.create({
  baseURL: baseURL + "/api/v1",
  withCredentials: true,
});

export const signupAPI = (authData) => API.post("/user/signup", authData);

export const signinAPI = (authData) => API.post("/user/signin", authData);

export const getLoggedUserAPI = (data) =>
  API.get(`/user/get-login-status/${data}`);

export const googleLoginAPI = (token) =>
  API.post(`/user/google-login/`, null, {headers: {Authorization: token}});

export const updateUserAPI = (useDetails) =>
  API.put("/user/update-user", useDetails);

export const getProductAPI = (args) => API.post("/product/getProduct", args);

export const addToCartAPI = (productId, quantity = 1) =>
  API.post(`/cart/add/?productId=${productId}&quantity=${quantity}`);

export const getCartItemAPI = () => API.get(`/cart/getCartItems`);


export const removeFromCartAPI = (productId, quantity = 1) =>
  API.post(`/cart/remove/?productId=${productId}&quantity=${quantity}`);

export const toggleWishlistAPI = (type) => API.post(`/wishlist/toggle/${type}`);

export const getWishlistAPI = () => API.get(`/wishlist/get-wishlist`);

export const addOrdersAPI = (orderDetail) =>
  API.post(`/orders/add-orders`, orderDetail);

export const resetCartAPI = () => API.post(`/cart/reset`);

export const getOrdersAPI = () => API.get(`/orders/get-orders`);
