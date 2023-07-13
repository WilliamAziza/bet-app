import React, { Component } from 'react';
import Modal from 'react-modal';
import { Form } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    handleLoginClick = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div  >
                {!this.state.showModal ? (
                    <button onClick={this.handleLoginClick}>Login</button>
                ) : (
                    <Modal
                        isOpen={this.state.showModal}
                        onRequestClose={this.handleCloseModal}
                        
                    >
                        <form className='form'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="number" placeholder="Enter phone number" className='buttonText'/>
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" className='buttonText' />
                            </Form.Group>
                            
                            <button onClick={this.handleCloseModal}>Close</button>
                        </form>
                    </Modal>
                )}
            </div>
        );
    }
}

export default Login;
