import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../Header";
import { NavLink, useHref, useLocation } from "react-router-dom";
import "./style.css";

const Layout = ({ children, sidebar }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
    <>
      <Header />
      {sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/products">PRODUCTS</NavLink>
                </li>
                <li>
                  <NavLink to="/category">CATEGORY</NavLink>
                </li>
                <li>
                  <NavLink to="/orders">ORDERS</NavLink>
                </li>
              </ul>
            </Col>

            <Col md={10} className="main-container">
              {isDashboard && (
                <Card
                  style={{ margin: "2rem", background: "#fff" }}
                  className="text-center"
                >
                  <Card.Body>
                    <Card.Title>Welcome to Admin Dashboard</Card.Title>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius maiores tempore impedit vel possimus, deleniti odio
                      nostrum numquam inventore. Velit placeat cumque provident,
                      rerum recusandae cum natus ipsam aspernatur vel?
                    </p>
                  </Card.Body>
                </Card>
              )}
              {children}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>{children}</Container>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.bool,
};

export default Layout;

// import React from "react";
// import PropTypes from "prop-types";
// import Header from "../Header";
// import { Container } from "react-bootstrap";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />
//       {
//         propTypes.sidebar ? <Container fluid>
//         <Row>
//           <Col md={2} className="sidebar">
//             {/* Sidebar */}
//             <ul>
//               <li>
//                 <NavLink to={"/"}>HOME</NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/products"}>PRODUCTS</NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/orders"}>ORDERS</NavLink>
//               </li>
//             </ul>
//           </Col>
//           <Col md={10} className="main-container">
//             {isLoading ? (
//               <div>Loading...</div>
//             ) : (
//               <Card
//                 style={{ margin: "2rem", background: "#fff" }}
//                 className="text-center"
//               >
//                 <Card.Body>
//                   <Card.Title>Welcome to Admin Dashboard</Card.Title>
//                   <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                     Eius maiores tempore impedit vel possimus, deleniti odio
//                     nostrum numquam inventore. Velit placeat cumque provident,
//                     rerum recusandae cum natus ipsam aspernatur vel?
//                   </p>
//                 </Card.Body>
//               </Card>
//             )}
//           </Col>
//         </Row>
//         {children}
//       </Container>
//         }
//     </>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Layout;

// import React from 'react'
// import Header from '../Header';
// import { Container } from 'react-bootstrap';
// /**
// * @author
// * @function Layout
// **/

// const Layout  = (props) => {
//   return(
//     <>
//         <Header />
//         <Container>
//           {props.children}
//         </Container>
//     </>
//    )
//  }
//  export default Layout;
