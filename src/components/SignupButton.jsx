// SignupButton.js
import React from 'react';

const SignupButton = () => {
  // Handle signup logic here, e.g., navigate to a signup page or open a modal
  const handleSignup = () => {
    // Add your signup logic here, e.g., navigate to a signup page
    // You can use react-router-dom's history or Link component to navigate to the signup page
    // Example: history.push('/signup');
  };

  return (
    <button className='navlink' onClick={handleSignup}>
      SIGN UP
    </button>
  );
};

export default SignupButton;
