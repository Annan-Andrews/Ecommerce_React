import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Image, Button } from 'react-bootstrap';

function ProductDetails() {

  const [productData, setProductData] = useState ({})
  let { productId } = useParams();


  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/'+productId)
    .then(res=>{
      setProductData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <> 
      <Image src={productData.image} thumbnail  className="Img"/>
      <Card.Title>{productData.title}</Card.Title>
      <Card.Text>${productData.price}</Card.Text>
      <Card.Text>{productData.description}</Card.Text>
      <Button variant="primary">Buy</Button>
      <Button variant="warning">Add to Cart</Button>
    </>
  )
}

export default ProductDetails
