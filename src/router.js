import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Login from './components/login';
import Home from './components/Home';
import About from './components/about';
import WonSlips from './components/Won slips';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4">
                    <Navbar.Brand href="/" className="fw-bold">Willie's Odds</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/wonSlips">Won Slips</Nav.Link>
                        </Nav>
                        <Login />
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/wonSlips' element={<WonSlips/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;
