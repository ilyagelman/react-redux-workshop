const LastScore = ({ score }) => {
  if (score === undefined) {
    return null;
  }

  return score
    ? <h4>Your response was { score }ms</h4>
    : <h4>You pressed too fast</h4>;
};

export default LastScore;
