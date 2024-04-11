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
            </div>
        );
    }
}

export default WonSlips;
