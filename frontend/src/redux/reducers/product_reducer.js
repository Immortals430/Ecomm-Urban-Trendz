import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductAPI } from "../../api/api";

const initialState = {
  bestseller: [],
  searchResult: [],
  singleProduct: {}
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    SET_BESTSELLER: (state, action) => {
      state.bestseller = action.payload
    },
    SET_SEARCHRESULT: (state, action) => {
      state.searchResult = action.payload
    },
    SET_SINGLEPRODUCT: (state, action) => {
      state.singleProduct = action.payload
    }
  },
});


// get product
export const getProduct = createAsyncThunk(
  "getProduct/product",
  async (args) => {
    try {
      const {data} = await getProductAPI(args);
      return data;
    } catch ({ response }) {
      window.alert(response.data.message);
      return false;
    }
  }
);

export const productReducer = productSlice.reducer;
export const { SET_BESTSELLER, SET_SEARCHRESULT, SET_SINGLEPRODUCT } = productSlice.actions;
export const productSelector = (state) => state.productReducer;
