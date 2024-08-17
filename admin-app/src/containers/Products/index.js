import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions/product.action";

/**
 * @function Products
 **/

export const Products = (props) => {
  // State management
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // Function to handle modal close
  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    // Append each product picture to the form data
    productPictures.forEach((pic) => {
      form.append("productPictures", pic);
    });

    // Dispatch the action to add the product
    dispatch(addProduct(form)).then(() => {
      // Clear input fields after submission
      setName("");
      setQuantity("");
      setPrice("");
      setDescription("");
      setCategoryId("");
      setProductPictures([]);
      setShow(false);
    });
  };

  // Function to handle modal show
  const handleShow = () => setShow(true);

  // Function to handle the file input change
  const handleProductPictures = (e) => {
    // Convert file list to array
    const files = Array.from(e.target.files);
    setProductPictures((prevPictures) => [...prevPictures, ...files]);
  };

  // Function to create category options list
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <Button variant="primary" onClick={handleShow}>
                Add New Product
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Name Input */}
          <Input
            label="Name"
            value={name}
            placeholder={`Product Name`}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Quantity Input */}
          <Input
            label="Quantity"
            value={quantity}
            placeholder={`Product Quantity`}
            onChange={(e) => setQuantity(e.target.value)}
          />

          {/* Price Input */}
          <Input
            label="Price"
            value={price}
            placeholder={`Product Price`}
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* Description Input */}
          <Input
            label="Description"
            value={description}
            placeholder={`Product Description`}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Category Input */}
          <select
            className="form-control"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {createCategoryList(category.categories).map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>

          {/* Display selected product pictures */}
          {productPictures.length > 0 &&
            productPictures.map((pic, index) => (
              <div key={index}>{pic.name}</div>
            ))}

          {/* Product Picture Input */}
          <input
            type="file"
            name="productPictures"
            onChange={handleProductPictures}
            className="form-control"
            multiple // Allow multiple file selection
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Products;

// import React, { useState } from "react";
// import Layout from "../../components/Layout";
// import { Col, Container, Row, Modal, Button } from "react-bootstrap";
// import Input from "../../components/UI/Input";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../../actions/product.action";

// /**
//  * @function Products
//  **/

// export const Products = (props) => {
//   // State management
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [productPictures, setProductPictures] = useState([]);
//   const [show, setShow] = useState(false);
//   const category = useSelector((state) => state.category);
//   const dispatch = useDispatch();

//   // Function to handle modal close
//   const handleClose = () => {
//     const form = new FormData();
//     form.append("name", name);
//     form.append("quantity", quantity);
//     form.append("price", price);
//     form.append("description", description);
//     form.append("category", categoryId);

//     // Append each product picture to the form data
//     productPictures.forEach((pic) => {
//       form.append("productPictures", pic);
//     });

//     // Dispatch the action to add the product
//     dispatch(addProduct(form)).then(() => {
//       // Clear input fields after submission
//       setName("");
//       setQuantity("");
//       setPrice("");
//       setDescription("");
//       setCategoryId("");
//       setProductPictures([]);
//       setShow(false);
//     });
//   };

//   // Function to handle modal show
//   const handleShow = () => setShow(true);

//   // Function to handle the file input change
//   const handleProductPictures = (e) => {
//     // Convert file list to array and ensure no duplicates
//     const files = Array.from(e.target.files);
//     setProductPictures((prevPictures) => [
//       ...prevPictures,
//       ...files.filter(
//         (file) => !prevPictures.some((pic) => pic.name === file.name)
//       ),
//     ]);
//   };

//   // Function to create category options list
//   const createCategoryList = (categories, options = []) => {
//     for (let category of categories) {
//       options.push({ value: category._id, name: category.name });
//       if (category.children.length > 0) {
//         createCategoryList(category.children, options);
//       }
//     }
//     return options;
//   };

//   return (
//     <Layout sidebar>
//       <Container>
//         <Row>
//           <Col md={12}>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <h3>Products</h3>
//               <Button variant="primary" onClick={handleShow}>
//                 Add New Product
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <Modal show={show} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Name Input */}
//           <Input
//             label="Name"
//             value={name}
//             placeholder={`Product Name`}
//             onChange={(e) => setName(e.target.value)}
//           />

//           {/* Quantity Input */}
//           <Input
//             label="Quantity"
//             value={quantity}
//             placeholder={`Product Quantity`}
//             onChange={(e) => setQuantity(e.target.value)}
//           />

//           {/* Price Input */}
//           <Input
//             label="Price"
//             value={price}
//             placeholder={`Product Price`}
//             onChange={(e) => setPrice(e.target.value)}
//           />

//           {/* Description Input */}
//           <Input
//             label="Description"
//             value={description}
//             placeholder={`Product Description`}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           {/* Category Input */}
//           <select
//             className="form-control"
//             value={categoryId}
//             onChange={(e) => setCategoryId(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             {createCategoryList(category.categories).map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.name}
//               </option>
//             ))}
//           </select>

//           {/* Display selected product pictures */}
//           {productPictures.length > 0 &&
//             productPictures.map((pic, index) => (
//               <div key={index}>{pic.name}</div>
//             ))}

//           {/* Product Picture Input */}
//           <input
//             type="file"
//             name="productPictures"
//             onChange={handleProductPictures}
//             className="form-control"
//             multiple // Allow multiple file selection
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Layout>
//   );
// };

// export default Products;
