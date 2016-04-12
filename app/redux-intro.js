import { createStore } from 'redux';

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  return state;
};

window.store = createStore(reducer, initialState);

/* The View */
document.body.innerHTML = `
  <h1>Counter: ${ store.getState() }</h1>
  
  <button onclick="store.dispatch({ type: 'INCREMENT' })">
    Increment
  </button>
`;

/* Subscribe */
function updateUI() {
  document.querySelector('h1').innerText = `Counter: ${ store.getState() }`;
}

store.subscribe(updateUI);
