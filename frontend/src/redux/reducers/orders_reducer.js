import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrdersAPI } from "../../api/api";

const initialState = {
  orders: [],
};


const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    SET_ORDERS: (state, action) => {
      state.orders = action.payload;
    },
    UPDATE_ORDERS: (state, action) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});


// add orders
export const addOrders = createAsyncThunk(
  "orders/addOrders",
  async (args, { dispatch }) => {
    try {
      const { data } = await addOrdersAPI(args);
      dispatch(UPDATE_ORDERS(data));
    } catch ({ response }) {
      window.alert(response.data.message);
      return false;
    }
  }
);

export const ordersReducer = ordersSlice.reducer;
export const { SET_ORDERS, UPDATE_ORDERS } = ordersSlice.actions;
export const ordersSelector = (state) => state.ordersReducer;
