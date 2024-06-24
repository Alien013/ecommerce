import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
  reducer: rootReducer,
});

// Set the store on the window object for debugging purposes
if (process.env.NODE_ENV === "development") {
  window.store = store;
}

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers";

// const store = configureStore({
//   reducer: rootReducer,
// });

// // Set the store on the window object
// window.store = store;

// export default store;
