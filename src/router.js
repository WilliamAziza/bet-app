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
                <nav className='navlink' fixed="top">
                    
                        
                            <Navbar.Brand href="/"className='navlink' fixed="top">Willie's Odds</Navbar.Brand>
                            
                                <Link to='/' className='navlink'>HOME</Link>
                                <Link to='/about' className='navlink'>ABOUT US</Link>
                                <Link to='/wonSlips'className='navlink'>WON SLIPS</Link>
                            
                        
                        <Login />
                    
                </nav>
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
