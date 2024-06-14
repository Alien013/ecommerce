import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signup } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function FormGroup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user)); // Using dispatch from Redux to dispatch the signup action
  };

  return (
    <Form onClick={userSignup}>
      <Row>
        <Col>
          <Input
            label="First Name"
            placeholder="First Name"
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName" // Unique ID for this input
          />
        </Col>
        <Col>
          <Input
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            id="lastName" // Unique ID for this input
          />
        </Col>
      </Row>

      <Input
        label="Email"
        placeholder="Email"
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        id="email" // Unique ID for this input
      />

      <Input
        label="Password"
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        id="password" // Unique ID for this input
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const Signup = (props) => {
  const auth = useSelector((state) => state.auth);

  if (auth.authenticate) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "30px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <FormGroup />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;

// import React from "react";
// import Layout from "../../components/Layout";
// import { Button, Container, Form, Row, Col } from "react-bootstrap";
// import Input from "../../components/UI/Input";

// function FormGroup() {
//   return (
//     <Form>
//       <Row>
//         <Col>
//           <Input
//             label="First Name"
//             placeholder="First Name"
//             value=""
//             type="text"
//             oncchange={() => {}}
//           />
//         </Col>
//         <Col>
//           <Input
//             label="Last Name"
//             placeholder="Last Name"
//             value=""
//             type="text"
//             oncchange={() => {}}
//           />
//         </Col>
//       </Row>

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
//         {" "}
//         Submit{" "}
//       </Button>
//     </Form>
//   );
// }

// const Signup = (props) => {
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

// export default Signup;
