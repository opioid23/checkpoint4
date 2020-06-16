import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from "./imageInSrc.jpg"
//import Aziz from "./component/test"


function App() {

 
      return (
        <div>
         
          <div style={{border: 'solid'}}> 
          
          </div>  
          <h1 class="title red">Your name here</h1>  
          <img src={Image} />
          <img src="./public/imageInPublic.jpg"/> 
          <video width={320} height={240} controls>  
            <source src="myVideo.mp4" type="video/mp4" /> 
          </video>

        </div>
      );
    }




export default App;
