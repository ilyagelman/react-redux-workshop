const listStyle = {
  listStyle: 'none',
  padding: 0
};

const ScoreHistory = ({ scoreHistory }) => {
  if (!scoreHistory.length) {
    return null;
  }

  const minResponse = Math.min(...scoreHistory.filter((score) => score > 0));
  const lastScores = scoreHistory
    .slice(-5)
    .reverse()
    .map((score, index) => (
      <li key={ index }>{ score ? `${score}ms` : 'Too early!' }</li>
    ));

  return (
    <div>
      { minResponse !== Infinity && <h4>Best score: { minResponse }ms</h4> }

      Last 5 scores:
      <ul style={ listStyle }>
        { lastScores }
      </ul>
    </div>
  );
};

ScoreHistory.propTypes = {
  scoreHistory: React.PropTypes.array.isRequired
};

export default ScoreHistory;
