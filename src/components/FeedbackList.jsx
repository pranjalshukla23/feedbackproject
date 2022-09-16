import {AnimatePresence, motion} from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import {useContext} from 'react';
import Spinner from './shared/Spinner'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {

  const {feedback, isLoading} = useContext(FeedbackContext);
  console.log(feedback);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>Not Feedback yet!</p>;
  }

  return isLoading ? <Spinner /> : (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
              <motion.div
                  key={item.id}
                  initital={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
              >
                <FeedbackItem key={item.id} item={item}/>
              </motion.div>

          ))}
        </AnimatePresence>

      </div>
  );

  // return (
  //     <div className="feedback-list">
  //       {feedback.map((item)=>(
  //           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //       ))}
  //     </div>
  // )
}

export default FeedbackList;
