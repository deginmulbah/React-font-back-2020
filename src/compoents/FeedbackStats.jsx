import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
   const {feedback} = useContext(FeedbackContext)
    const totalReview = feedback.length;
    const reviewAverage = sumOfReview(feedback) / totalReview;

    return (
        <div className='feedback-stats'>
            <h4>{totalReview} Reviews</h4>
            <h4>Average Rating: {isNaN(reviewAverage) ? 0 : reviewAverage}</h4>
        </div>
    )
}

const sumOfReview = (reviews) => {
    const reviewSum = reviews.reduce((previousReting, currentRetings) => previousReting + currentRetings.rating, 0)
    return Math.round(reviewSum)
}

export default FeedbackStats