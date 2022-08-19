import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contacts from './Components/Contacts';
import Header from './Components/Header';

const App = () =>  {
  return (
    <div className="App">

     <Header brand="Contact Manager"/>

     <div className='container'>

     <Contacts />

                    
     </div>



    </div>
  );
}

export default App;
