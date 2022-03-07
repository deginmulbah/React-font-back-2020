import { createContext, useState } from "react";
import { v4 as uuiv4 } from "uuid";
import feedbackData from "../data/FeedbackData";
const FeedbackContext = createContext()
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(feedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })
    // add feedback item
    const addFeedBack = (newFeedback) => {
        newFeedback.id = uuiv4();
        setFeedback([newFeedback, ...feedback])
    }
    // delete feedback item
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this!!')) {
            setFeedback(feedback.filter((item) =>
                item.id !== id
            ))
        }
    }
    const editFeedback = (item) => {
        setFeedbackEdit({ item: item, edit: true })
    }

    const updateFeedback = (id, newUpdate) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item , ...newUpdate} : item ))
        )
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedBack,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext