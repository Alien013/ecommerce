import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  return token ? <Component {...rest} /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;

//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return isAuthenticated ? (
//     <Route {...rest} element={<Component />} />
//   ) : (
//     <Navigate to="/signin" replace />
//   );
// };

// export default PrivateRoute;
