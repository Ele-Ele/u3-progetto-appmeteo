import { configureStore } from "@reduxjs/toolkit";
import reducerFunction from "../reducers";

const store = configureStore({
  reducer: reducerFunction,
});

export default store;
