import React from "react";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";


function Root() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tempSearchQuery, setTempSearchQuery] = useState(''); 

  const handleSearchChange = (e) => {
    setTempSearchQuery(e.target.value); 
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    setSearchQuery(tempSearchQuery);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand>ECOMMERCE</Navbar.Brand>
          </Link>

          <Form onSubmit={handleSearchSubmit}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search products"
                  value={tempSearchQuery}
                  onChange={handleSearchChange}
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>


      <Outlet context={{ searchQuery }} />

      <Card className="text-center">
        <Card.Footer className="text-muted">Ecommerce React</Card.Footer>
      </Card>
    </>
  );
}

export default Root;
