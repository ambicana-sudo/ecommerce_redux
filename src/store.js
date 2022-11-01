import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger'
import boxSlice from "./features/box/box.slice";
import productItemSlice from "./features/product/productItem.slice";
import counterSlice from './features/counter/counter.slice'

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
