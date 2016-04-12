import { connect } from 'react-redux';
import Message from './message';
import LastScore from './last-score';
import ScoreHistory from './score-history';

const SPACEBAR_KEY = 32;

class Game extends React.Component {

  constructor() {
    super();

    this.state = {
      ready: false
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.keyCode === SPACEBAR_KEY) {
      return this.props.gameStarted
        ? this.endGame()
        : this.startGame();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  startGame() {
    this.setState({ ready: false });
    const randomTimeout = Math.floor(Math.random() * 6000) + 1000;

    this.timeOut = setTimeout(
      () => {
        this.setState({ ready: true });
        this.startTime = Date.now();
      },
      randomTimeout
    );

    this.props.startGame();
  }

  endGame() {
    const endTime = Date.now() - this.startTime;
    const score   = this.state.ready
      ? endTime
      : 0;

    this.props.endGame(score);
    clearTimeout(this.timeOut);
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Response Time Checker</h1>

        { !this.props.gameStarted && <LastScore score={ this.props.lastScore }/> }

        <Message gameStarted={ this.props.gameStarted }
                 ready={ this.state.ready }/>

        <ScoreHistory scoreHistory={ this.props.scoreHistory }/>
      </div>
    );
  }
}

Game.propTypes = {
  gameStarted: React.PropTypes.bool,
  scoreHistory: React.PropTypes.array,
  lastScore: React.PropTypes.number,
  startGame: React.PropTypes.func,
  endGame: React.PropTypes.func
};

const mapStateToProps = (state) => ({
  gameStarted: state.gameStarted,
  scoreHistory: state.scoreHistory,
  lastScore: state.scoreHistory[state.scoreHistory.length - 1]
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch({ type: 'START_GAME' }),
  endGame: (score) => dispatch({ type: 'END_GAME', score })
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
