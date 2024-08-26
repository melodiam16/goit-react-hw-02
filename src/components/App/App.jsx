import "./App.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0, total: 0, positive: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetClicks = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0, total: 0, positive: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        resetClicks={resetClicks}
        totalFeedback={totalFeedback}
      ></Options>
      <Feedback feedback={feedback} totalFeedback={totalFeedback}></Feedback>
      <Notification
        totalFeedback={totalFeedback}
        feedback={feedback}
      ></Notification>
    </div>
  );
}

export default App;
