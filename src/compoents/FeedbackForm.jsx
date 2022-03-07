import { useState, useContext, useEffect } from 'react'
import Card from './general/Card'
import Button from './general/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    const { addFeedBack, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false)
            setReviewText(feedbackEdit.item.text)
        }
    }, [feedbackEdit])

    const handleChange = ({ target: { value } }) => {
        if (value.length === 0) {
            setBtnDisabled(true);
            setErrMsg('')
        } else if (value.trim().length < 10) {
            setBtnDisabled(true);
            setErrMsg('Please input more then ten characters')
        } else {
            setErrMsg('')
            setBtnDisabled(false);
        }
        setReviewText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewText.trim().length < 10) {
            setBtnDisabled(true);
            setErrMsg('Please input more then ten characters')
        }

        const newFeedback = {
            text: reviewText,
            rating: rating
        }
        if (feedbackEdit.edit) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedBack(newFeedback);
        }
        setReviewText('')
        setBtnDisabled(true);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <RatingSelect selectedRating={(rating) => { setRating(rating) }} />
                <h2>How whould you rate your service with us</h2>
                <div className="input-group">
                    <input type="text" onChange={handleChange} value={reviewText} />
                    <Button type="submit" isDisabled={btnDisabled} >Submit</Button>
                </div>
                {errMsg && <div className="message">{errMsg}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm