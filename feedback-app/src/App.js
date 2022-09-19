
import { useState } from 'react';

import FeedbackList  from './components/FeedbackList';
import { Header } from './components/Header';
import FeedbackData from './data/FeedbackData'
import Card from './components/shared/Card'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData) ;

  const deleteFeedback = (id)=> {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter(item=> item.id !==id))
    }
  }

  return (
    <div >
      <Header/>
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete= {deleteFeedback} />
        <Card>
          Hello World
        </Card>
      </div>
    </div>
  );
}

export default App;
