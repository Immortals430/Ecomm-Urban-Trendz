import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { googleLoginAPI, signinAPI, signupAPI, updateUserAPI } from "../../api/api";


const initialState = {
  loggedUser: {},
  cart: [],
  wishlist: [],
  orders: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGGED_USER: (state, action) => {
      state.loggedUser = action.payload;
    }
  },
});

export const signup = createAsyncThunk("auth/signup", async (args) => {
  try {
    const { data } = await signupAPI(args);
    window.alert(data.message);
    return true;
  } catch ({ response }) {
    window.alert(response.data.message);
    return false;
  }
});

// sign in
export const signin = createAsyncThunk(
  "auth/signin",
  async (args, { dispatch }) => {
    try {
      const { data } = await signinAPI(args);
      document.cookie = data.token;
      dispatch(SET_LOGGED_USER(data.user));
    } catch ({ response }) {
      window.alert(response.data.message);
    }
  }
);


// google login 
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (args, { dispatch }) => {
    try {
      const { data } = await googleLoginAPI(args);
      console.log("data", data)
      document.cookie = data.token;
      dispatch(SET_LOGGED_USER(data.user));
    } catch (err) {
      window.alert(err.response.data.message);
    }
  }
);


// update user
export const updateUser = createAsyncThunk(
  "auth/signin",
  async (userDetail, { dispatch }) => {
    try {
      const { data } = await updateUserAPI(userDetail);

      dispatch(SET_LOGGED_USER(data));
    } catch ({ response }) {
      window.alert(response.data.message);
    }
  }
);

// logout
export const logout = createAsyncThunk("auth/logout", () => {
  // Cookies.remove("Urban Trendz")
  document.cookie =
    "Urban Trendz=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});

export const authReducer = authSlice.reducer;
export const { SET_LOGGED_USER } = authSlice.actions;
export const authSelector = (state) => state.authReducer;
