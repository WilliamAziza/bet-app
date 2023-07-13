import React, { Component } from 'react';
import { images } from './images';

class WonSlips extends Component {
    render() {
        return (
            <div>
                <div className='won'>
                    <p >Won Slips</p>
                    <p className='winning'>WINNING SLIPS <span> // BIG WINS</span></p>
                </div>
                <p className='success'>Successful Slips</p>
                <button className='but'>January</button>
                <button className='but1'>February</button>
                <button className='but'>March</button>
                <div className='slips'>
                <img src={images.slip1} alt="" />
                <img src={images.slip1} alt="" />
                <img src={images.slip1} alt="" />
                <img src={images.slip1} alt="" />

                </div>
                
                <br/>
                <button className='butimg'>MORE IMAGES</button>
            </div>
        );
    }
}

export default WonSlips;
