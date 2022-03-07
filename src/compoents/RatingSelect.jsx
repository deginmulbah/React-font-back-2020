import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ selectedRating }) {
    const [selected, setSelected] = useState(6)
    const handleChange = (e) => {
        const ratingVal = parseInt(e.currentTarget.value);
        setSelected(ratingVal)
        selectedRating(ratingVal)
    }
    const { feedbackEdit } = useContext(FeedbackContext);
    
    useEffect(() => {
        if (feedbackEdit.edit) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]);

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect