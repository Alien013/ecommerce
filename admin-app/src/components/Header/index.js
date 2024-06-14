import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signout } from "../../actions";

/**
 * @function Header
 **/
const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={logout}
              style={{ cursor: "pointer" }}
            >
              Signout
            </span>
          </li>
        </ul>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">
              Signin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">
              Signup
            </NavLink>
          </li>
        </ul>
      </Nav>
    );
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* If you need dropdowns or other nav elements, you can add them here */}
          </Nav>

          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Link } from "react-router-dom";
// import { signout } from "../../actions";

// /**
//  * @function Header
//  **/
// const Header = (props) => {
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const logout = () => {
//     dispatch(signout());
//   };

//   const renderLoggedInLinks = () => {
//     return (
//       <Nav>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <span className="nav-link" onClick={logout}>
//               Signout
//             </span>
//           </li>
//         </ul>
//       </Nav>
//     );
//   };

//   const renderNonLoggedInLinks = () => {
//     return (
//       <Nav>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink to="/signin" className="nav-link">
//               Signin
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/signup" className="nav-link">
//               Signup
//             </NavLink>
//           </li>
//         </ul>
//       </Nav>
//     );
//   };

//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       bg="dark"
//       variant="dark"
//       style={{ zIndex: 1 }}
//     >
//       <Container fluid>
//         <Link to="/" className="navbar-brand">
//           Admin Dashboard
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             {/* If you need dropdowns or other nav elements, you can add them here */}
//           </Nav>
//           {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

// import React from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { NavLink, Link } from "react-router-dom";
// /**
//  * @author
//  * @function Header
//  **/

// const Header = (props) => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
//         <Link to="/" className="navbar-brand">
//           Admin Dashboard
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <Nav>
//             {/* <Nav.Link href="#deets">Sign in</Nav.Link> */}
//             <li className="nav-item">
//               <NavLink to="/signin" className="nav-link">
//                 Signin
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/signup" className="nav-link">
//                 Signup
//               </NavLink>
//             </li>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
// export default Header;
