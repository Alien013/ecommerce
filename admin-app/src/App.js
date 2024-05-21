import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./containers/Home"; // Assuming Home component is exported as default export
import Signin from "./containers/Signin"; // Assuming Signin component is exported as default export
import Signup from "./containers/Signup"; // Assuming Signup component is exported as default export



function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
