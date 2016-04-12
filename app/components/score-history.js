const ScoreHistory = ({ scoreHistory }) => {
  if (!scoreHistory.length) {
    return null;
  }

  const minResponse = Math.min(...scoreHistory);
  const lastScores = scoreHistory.slice(-5).reverse();

  return (
    <div>
      <h4>Best score: { minResponse }ms</h4>

      Last 5 scores:
      <ul>
        { lastScores.map((score, index) => (
          <li key={ index }>{ score ? `${score}ms` : 'Too fast!' }</li>
        )) }
      </ul>
    </div>
  )
};

export default ScoreHistory;
