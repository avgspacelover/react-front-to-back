import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import Provider from './context';
import AddContact from './Components/contacts/AddContact';
import { About } from './Components/pages/About';
import NotFound from './Components/pages/Notfound';
import Test from './Components/Test';
import EditContact from './Components/contacts/EditContact';

const App = () =>  {
  return (

    <Provider>
      <Router>
      <div className="App">

        <Header brand="Contact Manager"/>

        <div className='container'>

          <Switch>
            <Route exact path='/' component={Contacts} />

            <Route exact path='/contact/add' component={AddContact} />

            <Route exact path='/contact/edit/:id' component={EditContact} />



            <Route exact path='/about' component={About} />

            <Route exact path='/test' component={Test} />


            <Route  component={NotFound} />


          </Switch>




              
        </div>

      </div>
      </Router>
    </Provider>
  
  );
}

export default App;
