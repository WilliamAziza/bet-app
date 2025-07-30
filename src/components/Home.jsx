import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { images } from './images';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <>
                <section className="hero-section d-flex align-items-center justify-content-center text-center position-relative">
                    <Container>
                        <h1 className="hero-title">Welcome to Willie's Odds Hub!</h1>
                        <p className="hero-subtitle">
                            Your trusted source for expert sports predictions and winning slips.
                        </p>
                        <Button variant="danger" size="lg" className="mt-3">
                            View VVIP Slips
                        </Button>
                    </Container>
                    <img src={images.ballers} alt="Players playing ball" className="hero-players-image" />
                </section>
                <section className="content-section py-5">
                    <Container>
                        <Row>
                            <Col>
                                <p>
                                    Willie's Odds is dedicated to providing the most accurate and reliable sports predictions.
                                    Our team of experts analyze every game, player stats, and market trends to bring you the best tips.
                                </p>
                                <p>
                                    Whether you are a casual bettor or a professional, our high and low risk slips cater to all levels.
                                    Join our community and stay ahead with daily updates and exclusive insights.
                                </p>
                                <p>
                                    Our VVIP slips offer premium access to insider information and high-value predictions.
                                    Experience the thrill of winning with Willie's Odds.
                                </p>
                                <p>
                                    We cover a wide range of sports including football, basketball, tennis, and more.
                                    Stay informed with our comprehensive analysis and expert advice.
                                </p>
                                <p>
                                    Our platform is user-friendly and designed to provide you with seamless access to all our services.
                                    Sign up today and start your journey to success with Willie's Odds.
                                </p>
                                <p>
                                    Trust, transparency, and accuracy are the pillars of our service.
                                    We are committed to helping you make informed betting decisions.
                                </p>
                                <p>
                                    Explore our website to learn more about our offerings and how we can help you win big.
                                    Contact us anytime for support and guidance.
                                </p>
                                <h2 className="mt-5">Why Choose Willie's Odds?</h2>
                                <p>
                                    We combine years of experience with cutting-edge analytics to provide you with the best betting advice.
                                    Our team constantly monitors sports events worldwide to keep you updated.
                                </p>
                                <p>
                                    Our community is growing rapidly, and we pride ourselves on transparency and customer satisfaction.
                                    Join us and be part of a winning team.
                                </p>
                                <p>
                                    We offer personalized tips and support to help you maximize your betting success.
                                    Our VVIP members enjoy exclusive benefits and priority access to our best predictions.
                                </p>
                                <p>
                                    Stay connected with us through our newsletter and social media channels for the latest updates.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Home;
