import React, { useState, useEffect } from 'react'; 
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from './components/Notification/Notification';



const App = () => { 
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const [feedback, setFeedback] = useState(() => {  
      const savedFeedback = localStorage.getItem('feedback');  
      return savedFeedback ? JSON.parse(savedFeedback) : initialFeedback;  
  });  

  useEffect(() => {  
      localStorage.setItem('feedback', JSON.stringify(feedback));  
  }, [feedback]);  

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;  
  const updateFeedback = (feedbackType) => {  
      setFeedback((prevFeedback) => ({  
          ...prevFeedback,  
          [feedbackType]: prevFeedback[feedbackType] + 1  
      }));  
  }; 
  const positiveFeedback = Math.round((feedback.good * 100) / totalFeedback);

  const resetFeedback = () => {  
      setFeedback(initialFeedback);  
  };  

  return (  
    <div>
      <Description/>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />  
      {totalFeedback > 0 ? (  
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback} />  
      ) : (  
          <Notification/>  
      )}  
    </div>  
  );  
};  

export default App; 
