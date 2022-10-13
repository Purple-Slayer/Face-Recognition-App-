import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
	return (
        <div>
        	<p className='f3'>
        		{'This Magic Brain will detect faces in your picture give it a try'}
        	</p>
			<p className='f5'>
        		{'example:https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UY1200_CR83,0,630,1200_AL_.jpg'}
        	</p>
        	<div className='centerR'>
        	 <div className='form centerR pa4 br3 shadow-5' >
        		 <input className='f4 pa2 w-70 center br4' type='text' onChange={onInputChange}/>
        		 <button className='w-30 grow f4 link ph3 pv2 dib black bg-light-purple ba br4' 
				 onClick={onButtonSubmit}>
				 Detect</button>
        	 </div>
        	</div>
        	 
        	
        </div>
   );
}

export default ImageLinkForm;