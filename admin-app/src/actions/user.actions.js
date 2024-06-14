import axios from "../helpers/axios";
import { userConstants } from "./constants";

// Signup action
export const Signup = (user) => {
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
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
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

// import axios from "../helpers/axios";
// import { authConstants, userConstants } from "./constants";
// // import { signup } from "./auth.actions";

// export const Signup = (user) => {
//   return async (dispatch) => {
//     dispatch({ type: userConstants.USER_REGISTER_REQUEST });

//     try {
//       const res = await axios.post("/admin/signup", {
//         ...user,
//       });
//       const token = localStorage.getItem("token");

//       if (res.status === 200) {
//         const { message } = res.data;
//         dispatch({
//           type: userConstants.USER_REGISTER_SUCCESS,
//           payload: { message },
//         });
//       } else {
//         if (res.status === 400) {
//           dispatch({
//             type: userConstants.USER_REGISTER_FAILURE,
//             payload: { error: res.data.error },
//           });
//         }
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
//       return errorMessage;
//     }
//   };
// };
