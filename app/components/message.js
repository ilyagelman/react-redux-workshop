const Message = ({ gameStarted, ready }) => {
  let message = 'Press spacebar when ready';
  
  if (!gameStarted) {
    return <h3>{ message }</h3>;
  }

  message = ready
    ? 'PRESS SPACEBAR NOW!'
    : 'Wait...';
  
  return <h3>{ message }</h3>;
};

Message.propTypes = {
  gameStarted: React.PropTypes.bool,
  ready: React.PropTypes.bool
};

export default Message;
