import React, {createContext, useState} from 'react';
import {v4 as uuid} from 'uuid';
import FeedbackData from '../data/FeedbackData'


const FeedbackContext = createContext();

export const FeedbackProdiver = ({children}) => {

    // const [feedback, setFeedback] = useState( [
    //     {
    //         id:1,
    //         text: 'This item is from context',
    //         rating: 10
    //     }
    // ])
    const [feedback, setFeedback] = useState(FeedbackData) ;

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    }) ;


    const deleteFeedback = (id)=> {
      if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter(item=> item.id !==id))
      }
    }

    const updateFeedback=(id, updItem) => {

        setFeedback( feedback.map((item)=> (
                item.id === id ? {
                    ...item, 
                    ...updItem
                } :
                item
            ))
        )
        
    }

    const editFeedback = (item)=> {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
  
    const addFeedback= (newFeedback)=> {
      newFeedback.id= parseInt(uuid());
  
      setFeedback( [newFeedback, ...feedback] )
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,

        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
