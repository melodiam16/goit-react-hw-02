export default function Notification({ totalFeedback }) {
  if (totalFeedback === 0) {
    return <p>No feedback yet</p>;
  }
  return null;
}
