import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

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
