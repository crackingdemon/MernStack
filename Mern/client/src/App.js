import React from 'react';
import "./App.css";
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <>
      <Navbar/>
      <Route exact path="/">
         <Home/>
      </Route>
      <Route path="/About">
         <About/>
      </Route>
      <Route path="/contact">
         <Contact/>
      </Route>
      <Route path="/signin">
         <Signin/>
      </Route>
      <Route path="/signup">
         <Signup/>
      </Route>
      <Route >
         <Errorpage/>
      </Route>
     
    </>
  )
}

export default App;

