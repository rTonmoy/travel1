import React from 'react';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg2 from "../../assets/images/gallery/g2.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";
import "../Gallery/gallery.css";
import { Col, Container, Row } from 'react-bootstrap';

const Gallery = () => {

    return (
        <Container>
            <Row className='gy-4'>
                <Col xs="12" sm="6" md="4">
                    <img className='img-fluid ami' src={GalleryImg1} alt="" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <img className='img-fluid ami' src={GalleryImg2} alt="" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <img className='img-fluid ami' src={GalleryImg3} alt="" />
                </Col>
            </Row>
            <Row className='gy-4 tmi'>
                <Col xs="12" sm="6" md="4">
                    <img className='img-fluid ami' src={GalleryImg4} alt="" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <img className='img-fluid ami' src={GalleryImg6} alt="" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <img className='img-fluid ami' src={GalleryImg7} alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default Gallery;
