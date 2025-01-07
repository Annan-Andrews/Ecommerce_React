import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Product(props){

  return(

    <Card>
      <Card.Img variant="top" src={props.productData.image} />
      <Card.Body>
        <Card.Title>{props.productData.title}</Card.Title>
        <Card.Text>${props.productData.price}</Card.Text>
        <Card.Text>{props.productData.description}</Card.Text>
        <Link to={`/product-details/${props.productData.id}`}>
          <Button variant="primary">View Product</Button>
        </Link>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>

  )
}

export default Product