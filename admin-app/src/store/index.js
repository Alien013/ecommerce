import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer,
});

// Set the store on the window object
window.store = store;

export default store;
