class Child extends React.Component {

  componentWillMount() {
    console.log('%c CHILD: componentWillMount', 'color: red');
  }

  componentDidMount() {
    console.log('%c CHILD: componentDidMount', 'color: orange');
  }

  componentWillReceiveProps() {
    console.log('%c CHILD: componentWillReceiveProps', 'color: brown');
  }

  componentWillUpdate() {
    console.log('%c CHILD: componentWillUpdate', 'color: violet');
  }

  componentDidUpdate() {
    console.log('%c CHILD: componentDidUpdate', 'color: blue');
  }

  componentWillUnmount() {
    console.log('%c CHILD: componentWillUnmount', 'color: indigo');
  }

  forceUpdateChild() {
    this.forceUpdate();
  }

  rerenderChild() {
    this.setState({ x: 2 });
  }

  unmountChild() {
    this.props.unmount();
  }

  render() {
    console.log('%c CHILD: render', 'color: green');

    return (
      <div>
        <h2>Child</h2>
        <div>
          <button onClick={ () => this.forceUpdateChild() }>Force-update Child</button>
          <button onClick={ () => this.rerenderChild() }>Rerender Child</button>
          <button onClick={ () => this.unmountChild() }>Unmount Child</button>
        </div>
      </div>
    );
  }

}

class Parent extends React.Component {

  constructor() {
    super();

    this.state = {
      showChild: true
    };

    this.unmountChild = this.unmountChild.bind(this);
  }

  forceUpdateParent() {
    this.forceUpdate();
  }

  rerenderParent() {
    this.setState({});
  }

  unmountChild() {
    this.setState({ showChild: false });
  }

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <div>
          <button onClick={ () => this.forceUpdateParent() }>Force-update Parent</button>
          <button onClick={ () => this.rerenderParent() }>Rerender Parent</button>
        </div>

        { this.state.showChild && <Child unmount={ this.unmountChild }/> }
      </div>
    );
  }
}

export default Parent;
