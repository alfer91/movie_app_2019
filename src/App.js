import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
// the component life cycle : mounting (constructor, render, componentDidMount) -> update (componentDidUpdate) -> unmounting (componentWillUnmount)

  constructor(props) {
    super(props);
    console.log("hello");
  }
  
  state = {
    count:0
  };
  add = () => {
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count:current.count-1}));
  };
  componentDidMount(){
    console.log("component redered");
  }
  componentDidUpdate(){
    console.log("updated");
  }
  componentWillUnmount(){
    console.log("unmount")
  }
  render(){
    console.log("rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
