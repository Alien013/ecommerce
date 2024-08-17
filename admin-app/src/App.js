import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedin, getAllCategory } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedin());
    }
    dispatch(getAllCategory());
  }, [dispatch, auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route
            path="/products"
            element={<PrivateRoute component={Products} />}
          />
          <Route
            path="/category"
            element={<PrivateRoute component={Category} />}
          />
          <Route path="/orders" element={<PrivateRoute component={Orders} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./containers/Home";
// import Signin from "./containers/Signin";
// import Signup from "./containers/Signup";
// import PrivateRoute from "./components/HOC/privateRoute";
// import { useDispatch, useSelector } from "react-redux";
// import { isUserLoggedin } from "./actions";

// function App() {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (!auth.authenticate) {
//       dispatch(isUserLoggedin());
//     }
//   }, [dispatch]); // Only re-run the effect if dispatch changes

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<PrivateRoute component={Home} />} />

//           <Route
//             path="/products"
//             element={
//               <PrivateRoute
//                 component={() => {
//                   <p>products</p>;
//                 }}
//               />
//             }
//           />

//           <Route
//             path="/orders"
//             element={
//               <PrivateRoute
//                 component={() => {
//                   <p>orders</p>;
//                 }}
//               />
//             }
//           />

//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./containers/Home"; // Assuming Home component is exported as default export
// import Signin from "./containers/Signin"; // Assuming Signin component is exported as default export
// import Signup from "./containers/Signup"; // Assuming Signup component is exported as default export
// import PrivateRoute from "./components/HOC/privateRoute"; // Import PrivateRoute component
// import { useDispatch, useSelector } from "react-redux";
// import { isUserLoggedin } from "./actions";

// function App() {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);

// useEffect(() => {
//   if (!auth.authenticate) {
//     dispatch(isUserLoggedin());
//   }
// }, [dispatch]); // Only re-run the effect if dispatch changes

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<PrivateRoute component={Home} />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// // import React, { useEffect, useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import "./App.css";
// // import Home from "./containers/Home"; // Assuming Home component is exported as default export
// // import Signin from "./containers/Signin"; // Assuming Signin component is exported as default export
// // import Signup from "./containers/Signup"; // Assuming Signup component is exported as default export
// // // import PrivateRoute from "./components/HOC/privateRoute";
// // import { useDispatch, useSelector } from "react-redux";
// // import { isUserLoggedin } from "./actions";

// // function App() {
// //   const dispatch = useDispatch();
// //   const auth = useSelector((state) => state.auth);

// //   useEffect(() => {
// //     if (!auth.authenticate) {
// //       dispatch(isUserLoggedin());
// //     }
// //   }, [auth]); // Add auth as a dependency

// //   return (
// //     <div className="App">
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/signin" element={<Signin />} />
// //         <Route path="/signup" element={<Signup />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;
