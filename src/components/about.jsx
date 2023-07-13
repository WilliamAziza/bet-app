import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { images } from './images';

class About extends Component {
    render() {
        return (
            <div>
                
                <p className='about'>ABOUT US</p>
                        
                <Container fluid className='aboutText'>
                    <Row>
                        <Col md='6' >
                        <img src={images.soccer} alt="" />
                        </Col>
                        <Col md='6'>
                            <p className='intro'>Introducing Our World</p>
                            <p>The bigger the sports event the more interest, excitement and media <br />
                                attention on the action. And the more betting markets we have available here
                                at Willie's Odds to turn your opinions into winning bets. Bigger sports event <br />
                                coming up!!.</p>
                            <button className='sub'>Subscribe To Us</button>
                        </Col>
                    </Row>
                    <div className='box'>
                            <div className='col1'>
                                <p className='col2'>5,346</p>
                                <p>SUBSCRIBED CLIENTS</p>
                            </div>
                            <div className='col1' >
                                <p className='col2'>8 </p>
                                <p>GATEWAYS</p>
                            </div>
                            <div className='col1'>
                            <p className='col2'>172</p>
                            <p>PREDICTIONS</p>
                            </div>
                            
                            <div className='col1'>
                            <p className='col2'>4,320</p>
                           <p>SATISFIED CLIENTS</p>
                            </div>    
                
                    </div>
                </Container>

                <p>FEEDBACK TO AZEY</p>
                            </div>
        );
    }
}

export default About;
