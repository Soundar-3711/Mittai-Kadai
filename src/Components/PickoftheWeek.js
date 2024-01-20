import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';

const PickoftheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    
    <section id="musttry" className="my-3">
        <div className="text-center my-2 py-3">
          <h2 className="display-5 text-success"> <i class="bi bi-search-heart"></i> Pick of the Week!</h2>
        </div>
    
    <Container>
      <Row>
        <Col md={7}>
          <Image src={require('../Myimages/Choco 5.jpg')} fluid={true} alt="Choco" rounded></Image>
        </Col>
        <Col md={5}>
          <div className="p-3">
            <h2 className="h1">Pick of the Week</h2>
            <p className="lead text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Button variant="success" onClick={()=>setShow(true)}> <i class="bi bi-bag-heart"></i> Buy Now</Button>
          </div>
        </Col>
      </Row>
      <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item added to cart.</Toast.Body>
          </Toast>
        </ToastContainer>
    </Container>
    </section>
  )
}

export default PickoftheWeek