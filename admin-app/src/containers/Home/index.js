import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Card } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts or when dependencies change
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            Sidebar
          </Col>
          <Col md={10} className="main-container">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <Card
                style={{ margin: "2rem", background: "#fff" }}
                className="text-center"
              >
                <Card.Body>
                  <Card.Title>Welcome to Admin Dashboard</Card.Title>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius maiores tempore impedit vel possimus, deleniti odio
                    nostrum numquam inventore. Velit placeat cumque provident,
                    rerum recusandae cum natus ipsam aspernatur vel?
                  </p>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// // import { Card } from "react-bootstrap";
// import { Row, Col, Container } from "react-bootstrap";
// import "./style.css";

// const Home = (props) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate an asynchronous operation
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     // Clear the timer when the component unmounts or when dependencies change
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Layout>
//       <Container fluid>
//         <Row>
//           <Col md={2} className="sidebar">
//             Sidebar
//           </Col>
//           <Col md={10} style={{ margin: "auto" }}>
//             Container
//           </Col>
//         </Row>
//       </Container>
//       {/* {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <Card
//           style={{ margin: "5rem", background: "#fff" }}
//           className="text-center"
//         >
//           <Card.Body>
//             <Card.Title>Welcome to Admin Dashboard</Card.Title>
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
//               maiores tempore impedit vel possimus, deleniti odio nostrum
//               numquam inventore. Velit placeat cumque provident, rerum
//               recusandae cum natus ipsam aspernatur vel?
//             </p>
//           </Card.Body>
//         </Card>
//       )} */}
//     </Layout>
//   );
// };

// export default Home;
