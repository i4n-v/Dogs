import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { photo } from "./photo";
import token from "./token";
import user from "./user";

const middlewares = [];
const reducer = combineReducers({ photo, token, user });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
