class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Parent: { this.state.counter }</h1>
        <button onClick={ () => this.increment() }>Increment</button>

        <Child counter={ this.state.counter }
               increment={ () => this.increment() }/>
      </div>
    )
  }
}

class Child extends React.Component {

  static get propTypes() {
    return {
      counter: React.PropTypes.number,
      increment: React.PropTypes.func
    }
  }

  render() {
    return (
      <div>
        <h1>Child: { this.props.counter }</h1>
        <button onClick={ this.props.increment }>Increment Parent</button>
      </div>
    )
  }
}

export default Parent;
