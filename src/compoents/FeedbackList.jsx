import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);
  return (
    <div className='feedback-list'>
      <AnimatePresence >
        {feedback.map((feedback, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem feedbackItem={feedback} key={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}


export default FeedbackList