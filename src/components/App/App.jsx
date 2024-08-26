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
    const newFeedback = {
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    };
    const total = newFeedback.good + newFeedback.neutral + newFeedback.bad;
    const positive = Math.round((newFeedback.good / total) * 100);
    setFeedback({ ...newFeedback, total, positive });
  };

  const resetClicks = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0, total: 0, positive: 0 });
  };

  const totalFeedback = feedback.total;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetClicks={resetClicks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification totalFeedback={totalFeedback} />
      ) : (
        <Feedback feedback={feedback} />
      )}
    </div>
  );
}

export default App;
