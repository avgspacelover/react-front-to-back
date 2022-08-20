import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
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
