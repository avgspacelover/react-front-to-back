
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackList  from './components/FeedbackList';
import { Header } from './components/Header';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackForm } from './components/FeedbackForm';
import About from './pages/About';
import  {FeedbackProdiver} from './context/FeedbackContext';


function App() {

 

  return (
    <FeedbackProdiver>
    <Router >
      <Header/>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm  />
              <FeedbackStats  />
              <FeedbackList />

            </>
          }>
           
          </Route>
          <Route path='/about' element={<About />} />


        </Routes>

        <AboutIconLink />
      </div>
    </Router>
    </FeedbackProdiver>
  );
}

export default App;
