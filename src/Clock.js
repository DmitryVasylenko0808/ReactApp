import React, { useEffect, useState } from 'react';

/*const HelloWorld = () => {
  return (
      <h3>Hello World</h3>
  );
};*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
        time: this.state.time + 1
    });
  }

  render() {
    return (
      <div>
        <h2>Timer {this.props.value}</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;