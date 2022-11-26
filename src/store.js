import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import boxSlice from "./redux/box/box.slice";
import productItemSlice from "./redux/product/productItem.slice";
import cartSlice from './redux/cart/cart.slice'

const reducer = combineReducers({
  cart: cartSlice,
  box: boxSlice,
  product: productItemSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
