import React, { useState } from 'react';
import { images } from './images';

const ValentineCard = () => {
  const [response, setResponse] = useState('');

  const handleButtonClick = (answer) => {
    setResponse(answer);
  };

  return (
    <div className="valentine-card">
      <h1>WILL YOU BE MY VALENTINE?</h1>
      <img src={images.val} alt="" />
      <div className="button-container">
        <button className="btn-yes" onClick={() => handleButtonClick('Yes')}>
          Yes
        </button>
        <button className="btn-no" onClick={() => handleButtonClick('No')}>
          No
        </button>
      </div>

      {response && (
        <div className="response-container">
          {response === 'Yes' ? (
            <img className="gif" src={images.yes} alt="Yes GIF" />
          ) : (
            <img className="gif" src={images.no} alt="No GIF" />
          )}
          
        </div>
      )}
    </div>
  );
};

export default ValentineCard;
