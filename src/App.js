import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

import BcParticles from './components/BcParticles/BcParticles';


import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';





const initialState = {
        
    input: '',
    imageUrl: '',
    box:{ },
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
};
class App extends Component {
    

    constructor(){
        super();
        this.state = initialState
    };


    loadUser = (data) => {
        this.setState({user:{  
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
        }})
    }

    componentDidMount() {
       fetch('https://murmuring-shore-80548.herokuapp.com/')
            .then(response => response.json())
            .then(console.log)
    }

    
    calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return{
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col* width),
        bottomRow: height - (clarifaiFace.bottom_row * height),
      }
    };

    displayFaceBox = (box) => {
     this.setState({box: box});
    };

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };
    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input });
        
           fetch('https://murmuring-shore-80548.herokuapp.com/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
          })
            .then(response => response.json())
            .then(response => {
                if (response) {
                  fetch('https://murmuring-shore-80548.herokuapp.com/image', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: this.state.user.id
                    })
                  })
                 .then(response => response.json())
                 .then(count => {
                    this.setState(Object.assign(this.state.user, { entries : count}))
                 })
                 .catch(console.log)
                   
                  

                }
            
            this.displayFaceBox(this.calculateFaceLocation(response))
        } )

            .catch(err => console.log(err));
        
      
    };
      
    onRoutChange = (route) => {
    if(route === 'signout'){
        this.setState(initialState)
    } else if (route === 'home'){
        this.setState({isSignedIn: true})
    }
        this.setState({route: route});
    }
   
    render(){
      const  { isSignedIn, imageUrl, route, box} = this.state;
      const { onRoutChange, onInputChange, onButtonSubmit } = this;
    return (
        <div className="App">
            
            
            <Navigation isSignedIn={isSignedIn} onRoutChange={onRoutChange} />
            { route === 'home'
               ? <div> 
                  <Logo/>
                  <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                  <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
        
                  <FaceRecognition box={box} imageUrl={imageUrl}/> 
                  </div>
               
               :( route === 'signin'
                   ? <Signin loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
                   : <Register loadUser={this.loadUser} onRoutChange={this.onRoutChange} />
                )
             
               
        }
        <BcParticles/>    

            
       
        </div>
    );
};
};

export default App;
