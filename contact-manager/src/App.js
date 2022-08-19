import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contacts from './Components/Contacts';
import Header from './Components/Header';
import Provider from './context';

const App = () =>  {
  return (

    <Provider>
      <div className="App">

        <Header brand="Contact Manager"/>

        <div className='container'>

          <Contacts />
              
        </div>

      </div>
    </Provider>
  
  );
}

export default App;
