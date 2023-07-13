import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { images } from './images';

class Home extends Component {
    render() {
        return (
            <Container fluid className='backyard'>
                <Row>
                <Col md='6'>
                <p className='welcome'>Welome to <br/> Willie's Odds <br/> Hub!</p>
                <p className='high'>Get your High and Low Risk Slips from The No.1  Sports Prediction Guru. </p>
                <button className='preview'>VIEW VVIP SLIPS</button>
                <br/>
                </Col>
                <Col md='6'>
                <img src={images.ballers} alt="" />
                </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
