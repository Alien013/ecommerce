import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};

export default Input;

// import React from "react";
// import { Form } from "react-bootstrap";
// // import { Form } from "react-router-dom";
// /**
//  * @author
//  * @function Input
//  **/

// const Input = (props) => {
//   return (
//     <Form.Group controlId="formGridEmail">
//       <Form.Label>{props.label}</Form.Label>
//       <Form.Control
//         type={props.type}
//         placeholder={props.placeholder}
//         value={props.value}
//         onChange={props.onChange}
//       />
//     </Form.Group>
//   );
// };
// export default Input;
