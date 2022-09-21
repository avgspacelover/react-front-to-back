import React, {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';


export const FeedbackStats = () => {

  const {feedback} = useContext(FeedbackContext);



  let average= feedback.reduce((acc,current)=> {
    return acc+ current.rating;
  },0)/ feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      
      <h4>Average Rating: {isNaN(average) ? 0: average}</h4>
      
    </div>
  )
}
