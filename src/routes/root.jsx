import React from "react";
import { Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Root() {

  return (
    <>
      <Navbar  bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand>ECOMMERCE</Navbar.Brand>
          </Link>
        </Container>
        {/* <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> */}
      </Navbar>


      <Outlet />
      
      
      <Card className="text-center">
        <Card.Footer className="text-muted">Ecommerce React</Card.Footer> 
      </Card>

      
    </>
  )
}

export default Root
