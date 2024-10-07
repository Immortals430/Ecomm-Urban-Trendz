import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCartAPI,
  toggleWishlistAPI,
  removeFromCartAPI,
} from "../../api/api";

const initialState = {
  cart: [],
  orders: [],
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_CART: (state, action) => {
      state.cart = action.payload;
    },
    SET_WISHLIST: (state, action) => {
      state.wishlist = action.payload;
    },
    TOGGLE_WISHLIST: (state, action) => {
      if(action.payload.product){
        state.wishlist.unshift(action.payload)
      }
      else{
        const index = state.wishlist.findIndex(
          (elem) => elem._id == action.payload._id
        );
        state.wishlist.splice(index, 1);
      }

    },
    REMOVE_CART: (state, action) => {
      const index = state.cart.findIndex(
        (elem) => elem._id == action.payload._id
      );
      if (action.payload.product) {
        state.cart[index] = action.payload;
      } else {
        state.cart.splice(index, 1);
      }
    },
    ADD_CART: (state, action) => {
      const index = state.cart.findIndex(
        (elem) => elem._id == action.payload._id
      );
      if (index >= 0) {
        state.cart[index] = action.payload;
      } else {
        state.cart.unshift(action.payload);
      }
    },
  },
});


// add to cart
export const addToCart = createAsyncThunk(
  "addToCart/user",
  async ({ productId, quantity }, { dispatch }) => {
    try {
      const { data } = await addToCartAPI(productId, quantity);
      dispatch(ADD_CART(data));
 
    } catch ({ response }) {
      window.alert(response.data.message);
      return false;
    }
  }
);


// remove from cart
export const removeFromCart = createAsyncThunk(
  "removeFromCart/user",
  async ({ productId, quantity }, { dispatch }) => {
    try {
      const { data } = await removeFromCartAPI(productId, quantity);
      dispatch(REMOVE_CART(data));
    } catch ({ response }) {
      window.alert(response.data.message);
      return false;
    }
  }
);

export const toggleWishlist = createAsyncThunk(
  "toggleWishlist/user",
  async ({ productId }, { dispatch }) => {
    try {
      const { data } = await toggleWishlistAPI(productId);
      dispatch(TOGGLE_WISHLIST(data))
      return data;
    } catch ({ response }) {
      window.alert(response.data.message);
      return false;
    }
  }
);



export const userReducer = userSlice.reducer;
export const { SET_CART, SET_WISHLIST, REMOVE_CART, ADD_CART,TOGGLE_WISHLIST } =
  userSlice.actions;
export const userSelector = (state) => state.userReducer;
