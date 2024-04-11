import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      phoneNumber: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handlePhoneNumberChange = (event) => {
    this.setState({ phoneNumber: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();

    // Simulate login logic here
    const { phoneNumber, password } = this.state;

    // Replace this with your actual login logic
    // For demonstration purposes, we'll simply set isLoggedIn to true.
    this.setState({ isLoggedIn: true, showModal: false });
  }

  render() {
    return (
      <div>
        {!this.state.isLoggedIn ? (
          <div>
            <button onClick={this.handleLoginClick} disabled={this.state.showModal}>
              Log In
            </button>
            <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.handleLoginSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter phone number"
                      value={this.state.phoneNumber}
                      onChange={this.handlePhoneNumberChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Log In
                  </Button>
                  <Button variant="secondary" onClick={this.handleCloseModal}>
                    Close
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        ) : (
          <div>
               <img src="data:image/png;base64,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" alt="User" height='40px'/>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
