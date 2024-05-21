import React from "react";
import Layout from "../../components/Layout";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

function FormGroup() {
  return (
    <Form>
      <Input
        label="Email"
        placeholder="Email"
        value=""
        type="text"
        oncchange={() => {}}
      />

      <Input
        label="Password"
        placeholder="Password"
        value=""
        type="password"
        oncchange={() => {}}
      />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const Signin = (props) => {
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

export default Signin;
