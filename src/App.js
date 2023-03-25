
import React, { Component }  from 'react';
// import {useState} from 'react';
import './index.css';
import './style.css';
import Logincomponent from './components/Logincomponent';
import Navcompnent from './components/Navcompnent';
import Homecomponent from './components/Homecomponent';
import Footercomponent from './components/Footercomponent';



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



 class App extends Component {

  render() {
    return(
    <div>
   
  
  <Router>
  <Navcompnent></Navcompnent>
  
  <Routes>
 <Route path="/index" element={<Homecomponent />} exact></Route>
  
 <Route path="/login" element={<Logincomponent />}></Route> 
</Routes>
<Footercomponent></Footercomponent>
  </Router>
      </div>
 
    );
      }
  }


export default App;

