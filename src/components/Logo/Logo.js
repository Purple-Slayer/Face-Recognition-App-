import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import Brain from './brain.png'
const Logo = () => {
	return ( 
       <div className='ma4 mt0'>
          <Tilt className="Tilt br2 shadow-2" options={{ max : 31 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
              <img className='brainimg' style={{paddingTop: '18px'}} alt='logo' src={Brain}/>
            </div>
          </Tilt>
       </div>
  );
}

export default Logo;