import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
// import userReducer from "./userReducer";
import producrReducer from "./product.reducer";
import orderReducer from "./order.reducer";
import { categoryReducer } from "./category.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
  product: producrReducer,
  order: orderReducer,
  category: categoryReducer,
});

export default rootReducer;
