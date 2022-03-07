// import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './general/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ feedbackItem }) {
    const { deleteFeedback , editFeedback } = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{feedbackItem.rating}</div>
            <button className='close' onClick={() => deleteFeedback(feedbackItem.id)}>
                <FaTimes color="purple" />
            </button>
            <button className='edit' onClick={() => editFeedback(feedbackItem)}>
                <FaEdit className='purple' />
            </button>
            <div className="text-display">{feedbackItem.text}</div>
        </Card>
    )
}

export default FeedbackItem