import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "./reducers/auth_reducer";
import { productReducer } from "./reducers/product_reducer";
import { userReducer } from "./reducers/user_reducer";
import { ordersReducer } from "./reducers/orders_reducer";


export const store = configureStore({
    reducer: {
        authReducer,
        productReducer,
        userReducer,
        ordersReducer
    }
})