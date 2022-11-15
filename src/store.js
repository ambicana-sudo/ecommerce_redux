import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import boxSlice from "./redux/box/box.slice";
import productItemSlice from "./redux/product/productItem.slice";
import counterSlice from './redux/counter/counter.slice'

const reducer = combineReducers({
  count: counterSlice,
  box: boxSlice,
  product: productItemSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
