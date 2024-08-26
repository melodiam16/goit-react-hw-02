export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <>
      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </>
      )}
    </>
  );
}
