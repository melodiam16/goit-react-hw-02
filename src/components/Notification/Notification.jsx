export default function Notification({ totalFeedback, feedback: { good } }) {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
  return (
    <>
      {totalFeedback !== 0 && (
        <>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positiveFeedback}%</p>
        </>
      )}
    </>
  );
}
