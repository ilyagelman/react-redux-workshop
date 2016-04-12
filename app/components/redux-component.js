import { createStore } from 'redux';

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  return state;
};

const store = createStore(reducer, initialState);

class ReduxIntro extends React.Component {

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  render() {
    const counter = store.getState();

    return (
      <div>
        <h1>Counter: { counter }</h1>
        <button onClick={ this.increment }>Increment</button>
      </div>
    )
  }

}

export default ReduxIntro;
