import React, { useContext } from 'react'
import  Card  from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';



export const FeedbackItem = ({item}) => {

  const {deleteFeedback, editFeedback}= useContext(FeedbackContext)



  return (
    <Card reverse={false}>
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={()=> deleteFeedback(item.id)}>
            <FaTimes color='purple'/>
        </button>

        <button onClick={()=> editFeedback(item)}className='edit'>
          <FaEdit color='purple'>

          </FaEdit>

        </button>

        <div className='text-display'>{item.text}</div>

    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}