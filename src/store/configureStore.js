import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { photo } from "./photo";

const middlewares = [];
const reducer = combineReducers({ photo });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
