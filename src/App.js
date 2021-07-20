import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey:'18a306b7d8964baeb78ffa886be075e0'
});

const particlesOptions = {
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state ={
      input:'',
    }
  }

  onInputChange =(event)=>{
    console.log(event.target.value);
  }

  onButtonSubmit =() =>{
    app.models.predict("18a306b7d8964baeb78ffa886be075e0", this.state.input).then(
    function(response){
      console.log(response);
    },
    function(err){

    }
    );

  }

  render(){
    return (
    <div className="App">
      <Navigation />
      <Particles className = 'particles'
        params={particlesOptions}
      />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
      <FaceRecognition />

    </div>
  );
  }

}

export default App;
