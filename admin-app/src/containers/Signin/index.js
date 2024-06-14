import React, { useState } from "react";
// import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import { login } from "../../actions";
// import { isUserLoggedin } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(isUserLoggedin());
  //   }
  // }, []);

  const userLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };
    const errorMessage = await dispatch(login(user));
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setRedirect(true);
    }
  };

  if (redirect || auth.authenticate) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {error && (
                <Alert variant="danger" style={{ marginTop: "10px" }}>
                  {error}
                </Alert>
              )}

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;

// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
// import { login } from "../../actions";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const auth = useSelector((state) => state.auth);

//   const dispatch = useDispatch();

//   const userLogin = async (e) => {
//     e.preventDefault();
//     const user = { email, password };
//     const errorMessage = await dispatch(login(user));
//     if (errorMessage) {
//       setError(errorMessage);
//     } else {
//       setRedirect(true);
//     }
//   };

//   if (redirect) {
//     return <Navigate to="/" replace />;
//   }

//   return (
//     <Layout>
//       <Container>
//         <Row style={{ marginTop: "30px" }}>
//           <Col md={{ span: 6, offset: 3 }}>
//             <Form onSubmit={userLogin}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>

//               {error && (
//                 <Alert variant="danger" style={{ marginTop: "10px" }}>
//                   {error}
//                 </Alert>
//               )}

//               <Button
//                 variant="primary"
//                 type="submit"
//                 style={{ marginTop: "10px" }}
//               >
//                 Submit
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Layout>
//   );
// };

// export default Signin;

// import React from "react";
// import Layout from "../../components/Layout";
// import { Button, Container, Form, Row, Col } from "react-bootstrap";
// import Input from "../../components/UI/Input";

// function FormGroup() {
//   return (
//     <Form>
//       <Input
//         label="Email"
//         placeholder="Email"
//         value=""
//         type="text"
//         oncchange={() => {}}
//       />

//       <Input
//         label="Password"
//         placeholder="Password"
//         value=""
//         type="password"
//         oncchange={() => {}}
//       />

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// const Signin = (props) => {
//   return (
//     <Layout>
//       <Container>
//         <Row style={{ marginTop: "30px" }}>
//           <Col md={{ span: 6, offset: 3 }}>
//             <FormGroup />
//           </Col>
//         </Row>
//       </Container>
//     </Layout>
//   );
// };

// export default Signin;
