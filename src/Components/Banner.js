import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


const Banner = () => {
  return (
    <Container>
        <Row className="justify-content-center align-items-center">
            <Col lg={8}>
            <Carousel>
      <Carousel.Item interval={2000}>
        <Image className="d-block w-100" src={require('../Myimages/Choco 3.jpg')} alt="Choco_1"></Image>
        
        <Carousel.Caption>
          <h3>Choco_1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image className="d-block w-100" src={require('../Myimages/Choco 2.jpg')} alt="Choco_2"></Image>
        
        <Carousel.Caption>
          <h3>Choco_2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image className="d-block w-100" src={require('../Myimages/Choco 1.jpg')} alt="Choco_3"></Image>
        
        <Carousel.Caption>
          <h3>Choco_3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner