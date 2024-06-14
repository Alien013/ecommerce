import axios from "../helpers/axios";
import { authConstants, userConstants } from "./constants";
import axiosInstance from "../helpers/axiosInstance";

// Login action
export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    try {
      const res = await axios.post("/admin/signin", { ...user });

      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error
        : "Network error";
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};

// Signup action
export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });

    try {
      const res = await axios.post("/admin/signup", { ...user });

      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: { token, user },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: userConstants.USER_REGISTER_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error
        : "Network error";
      dispatch({
        type: userConstants.USER_REGISTER_FAILURE,
        payload: { error: errorMessage },
      });
    }
  };
};

// Check if user is logged in
export const isUserLoggedin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          authenticate: false,
          error: "Failed to login",
        },
      });
    }
  };
};

// Logout action
// import axiosInstance from "../helpers/axiosInstance";

export const signout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGOUT_REQUEST });
      const res = await axiosInstance.post("/admin/signout"); // Use the correct URL path here
      if (res.status === 200) {
        localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS });
      } else {
        dispatch({
          type: authConstants.LOGOUT_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: error.message },
      });
    }
  };
};

// export const signout = () => {
//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGOUT_REQUEST });

//     try {
//       const res = await axios.post("/admin/signout");
//       if (res.status === 200) {
//         localStorage.clear();
//         dispatch({ type: authConstants.LOGOUT_SUCCESS });
//       } else {
//         dispatch({
//           type: authConstants.LOGOUT_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: authConstants.LOGOUT_FAILURE,
//         payload: { error: error.message },
//       });
//     }
//   };
// };

// export const signout = () => {
//   return (dispatch) => {
//     dispatch({ type: authConstants.LOGOUT_REQUEST });
//     const res = await axios.post("/admin/signout");
//     if (res.status === 200) {
//       localStorage.clear();
//       dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     } else {
//       dispatch({
//         type: authConstants.LOGOUT_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

// import axios from "../helpers/axios";
// import { authConstants } from "./constants";

// export const login = (user) => {
//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGIN_REQUEST });

//     try {
//       const res = await axios.post("/admin/signin", { ...user });

//       if (res.status === 200) {
//         const { token, user } = res.data;
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));

//         dispatch({
//           type: authConstants.LOGIN_SUCCESS,
//           payload: { token, user },
//         });
//       } else {
//         dispatch({
//           type: authConstants.LOGIN_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       let errorMessage = "Network error";
//       if (error.response) {
//         errorMessage = error.response.data.error || "Server error";
//       }
//       dispatch({
//         type: authConstants.LOGIN_FAILURE,
//         payload: { error: errorMessage },
//       });
//     }
//   };
// };

// export const signup = (user) => {
//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGIN_REQUEST });

//     try {
//       const res = await axios.post("/admin/signup", { ...user });
//       const token = localStorage.getItem("token");

//       if (res.status === 200) {
//         const { message } = res.data;
//         dispatch({
//           type: authConstants.LOGIN_SUCCESS,
//           payload: { token, user },
//         });
//       } else {
//         dispatch({
//           type: authConstants.LOGIN_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       let errorMessage = "Network error";
//       if (error.response) {
//         errorMessage = error.response.data.error || "Server error";
//       }
//       dispatch({
//         type: authConstants.LOGIN_FAILURE,
//         payload: { error: errorMessage },
//       });
//     }
//   };
// };

// export const isUserLoggedin = () => {
//   return async (dispatch) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (token) {
//         const user = JSON.parse(localStorage.getItem("user"));
//         dispatch({
//           type: "USER_LOGIN_SUCCESS",
//           payload: { token, user },
//         });
//       } else {
//         dispatch({
//           type: "USER_LOGIN_FAIL",
//           payload: {
//             authenticate: false,
//             message: "Failed to login ",
//           },
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: "USER_LOGIN_ERROR",
//         payload: {
//           error: "An error occurred while checking authentication status.",
//         },
//       });
//     }
//   };
// };

// export const signout = () => {
//   return async (dispatch) => {
//     localStorage.clear();
//     dispatch({
//       type: authConstants.LOGOUT_REQUEST,
//     });
//   };
// };

// export const isUserLoggedin = () => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       dispatch({
//         payload: { token },
//       });
//     } else {
//       dispatch({
//         payload: {
//           authenticate: false,
//           message: "User needs to login ",
//         },
//       });
//     }
//   };
// };

// import { authConstants } from "./constants";

// export const login = (user) => {
//   return (dispatch) => {
//     dispatch({
//       type: authConstants.LOGIN_REQUEST,
//       payload: {
//         ...user,
//       },
//     });
//   };
// };
