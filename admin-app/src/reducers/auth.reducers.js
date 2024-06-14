import { authConstants, userConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: null,
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...state,
        authenticating: true,
        error: null,
      };
    case authConstants.LOGIN_SUCCESS:
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        authenticate: true,
        authenticating: false,
        error: null,
      };
    case authConstants.LOGIN_FAILURE:
    case userConstants.USER_REGISTER_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: action.payload.error,
      };
    case authConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case authConstants.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

// import { authConstants } from "../actions/constants";

// const initState = {
//   token: null,
//   user: {
//     firstName: "",
//     lasNAme: "",
//     email: "",
//     picture: "",
//   },
//   authenticate: false,
//   authenticating: false,
// };

// const authReducer = (state = initState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case authConstants.LOGIN_REQUEST:
//       state = {
//         ...state,
//         authenticating: true,
//       };
//       break;

//     // Add other cases for different action types if needed

//     case authConstants.LOGIN_SUCCESS:
//       state = {
//         ...state,
//         user: action.payload.user,
//         token: action.payload.token,
//         authenticate: true,
//         authenticating: false,
//       };
//       break;

//     case authConstants.LOGOUT_REQUEST:
//       state = { ...initState };
//       break;
//     default:
//       // Make sure to return the state for unhandled actions
//       return state;
//   }
//   return state;
// };

// export default authReducer;

// import { authConstants } from "../actions/constants";

// const initState = {
//     name: 'Manoj'
// }
// export default (state = initState, action){
//     switch(action.type) {
//         case authConstants.LOGIN_REQUEST:
//         state = {
//             ...state
//         }
//         break
//     }
//     return state;
// };
