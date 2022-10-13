import React from 'react' ;
import Signin from '../Signin/Signin';

const Navigation = ({onRoutChange, isSignedIn}) => {
	
	if(isSignedIn) {
		return(
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRoutChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign Out </p>
		</nav>
		);
	} else{
		return(
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRoutChange('signin')} className='f3 link dim black underline pa3 pointer'> Sign In </p>
			<p onClick={() => onRoutChange('register')} className='f3 link dim black underline pa3 pointer'> Register </p>
		</nav>
		);
	}
	 
  
}

export default Navigation;