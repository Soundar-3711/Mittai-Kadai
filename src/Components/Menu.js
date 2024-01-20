import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import MittaiCard from './MittaiCard.js'
import { useState } from 'react';

const Menu = () => {
    const [menu] = useState([1,2,3,4,5,6])  
    return (
    <section id="menu" className="bg-light">
        <Container>
            <div className="text-center">
                <h3 className="text-success my-3 py-5">
                    Trust Yourself with our Everyday Menu <i class="bi bi-tiktok"></i>
                </h3>
            </div>
            <Row>
                {
                    menu.map((item) => {
                        return (
                            <Col md={6} lg={4} key={item}>
                            <MittaiCard />
                            </Col>
                        );
                    
                        })}
            </Row>
        </Container>
    </section>
  )
}

export default Menu