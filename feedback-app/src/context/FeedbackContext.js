import React, {createContext, useEffect, useState} from 'react';
//import {v4 as uuid} from 'uuid';
//import FeedbackData from '../data/FeedbackData'


const FeedbackContext = createContext();

export const FeedbackProdiver = ({children}) => {

    // const [feedback, setFeedback] = useState( [
    //     {
    //         id:1,
    //         text: 'This item is from context',
    //         rating: 10
    //     }
    // ])
    const [feedback, setFeedback] = useState([]) ;

    const [isLoading, setIsLoading]= useState(true);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    }) ;

    useEffect( ()=> {

        const fetchFeedback= async()=> {
            const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)

            const data = await response.json();
            setFeedback(data);
            setIsLoading(false);
        }

        fetchFeedback();

    },[])


    const deleteFeedback = async(id)=> {
      if(window.confirm('Are you sure you want to delete?')){

        await fetch(`http://localhost/5000/feedback/${id}`, {method: 'DELETE'})

        setFeedback(feedback.filter(item=> item.id !==id))
      }
    }

    const updateFeedback= async(id, updItem) => {

        const response = await fetch(`http://localhost/5000/feedback/${id}`, {
            method: 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
    })

    const data = await response.json();

        setFeedback( feedback.map((item)=> (
                item.id === id ? {
                    ...item, 
                    ...data
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
  
    const addFeedback= async(newFeedback)=> {

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
      //newFeedback.id= parseInt(uuid());
        const data= await response.json();

      setFeedback( [data, ...feedback] )
    }
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
