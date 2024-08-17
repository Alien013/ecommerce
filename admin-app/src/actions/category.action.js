import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
    try {
      const res = await axios.get(`/category/getCategories`);
      if (res.status === 200) {
        const { categoryList } = res.data;
        dispatch({
          type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
          payload: { categories: categoryList },
        });
      } else {
        dispatch({
          type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: error.message },
      });
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST });
    try {
      const res = await axios.post(
        "http://localhost:2000/api/category/create",
        form
      );
      if (res.status === 201) {
        dispatch({
          type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
          payload: { category: res.data.category },
        });
      } else {
        dispatch({
          type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      dispatch({
        type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
        payload: { error: error.message },
      });
    }
  };
};

// export const addCategory = (form) => {
//   return async (dispatch) => {
//     dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });
//     try {
//       console.log("Sending form data:", form);
//       const res = await axios.post(
//         "http://localhost:2000/api/category/create",
//         form
//       );
//       console.log("Response:", res);
//       if (res.status === 201) {
//         dispatch({
//           type: categoryConstants.ADD_CATEGORY_SUCCESS,
//           payload: { category: res.data.category },
//         });
//       } else {
//         dispatch({
//           type: categoryConstants.ADD_CATEGORY_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       console.log("Error:", error);
//       dispatch({
//         type: categoryConstants.ADD_CATEGORY_FAILURE,
//         payload: { error: error.message },
//       });
//     }
//   };
// };

// export const addCategory = (category) => {
//   return async (dispatch) => {
//     dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST });
//     try {
//       const res = await axios.post(`/category/create`, category);
//       if (res.status === 201) {
//         dispatch({
//           type: categoryConstants.ADD_CATEGORY_SUCCESS,
//           payload: { category: res.data.category },
//         });
//       } else {
//         dispatch({
//           type: categoryConstants.ADD_CATEGORY_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: categoryConstants.ADD_CATEGORY_FAILURE,
//         payload: { error: error.message },
//       });
//     }
//   };
// };
