import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';

const App = () =>  {
  return (
    <div className="App">

     <Header brand="Contact Manager"/>

      <Contact name="jk" email="jk@gmail.com" phone= "8899443322"/>


    </div>
  );
}

export default App;
