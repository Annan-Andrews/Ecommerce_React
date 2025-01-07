import React from 'react'
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import "../styles/style.css"
import axios from 'axios';
import Product from '../components/Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext } from 'react-router-dom';

function ProductListing() {

  const [products, setProducts] = useState([])
  const { searchQuery } = useOutletContext();

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setProducts(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])


  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery ? searchQuery.toLowerCase() : '')
  );


  return (
    <>
      <Carousel>
        <Carousel.Item >
          <Image className='carousel_image' src="https://promotions.newegg.com/nepro/24-1141/1150x320@2x.jpg" fluid />;
        </Carousel.Item>
        <Carousel.Item >
          <Image className='carousel_image' src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?t=st=1723466964~exp=1723470564~hmac=8d144a44471d4efd8b4badce95f1dfac3f51d7f1a25cb0ce90d555bca4557e5c&w=1380" fluid />;
        </Carousel.Item>
        <Carousel.Item >
          <Image className='carousel_image' src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?t=st=1723467125~exp=1723470725~hmac=c8b29c63629e190a2cb50ca5cec648f4875a4b58cf48aad8793ba038c8ead68d&w=1380" fluid />;
        </Carousel.Item>
      </Carousel>

      <Container>
        <h1>Product</h1>
        <br />
        <div className ="product-list">
          <Row>
            {filteredProducts.map((product, index)=>{
              return(
                <Col xs = {12} sm = {6} md ={4} lg = {3} xxl = {3} key ={index}>
                  <Product productData = {product}/>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ProductListing
