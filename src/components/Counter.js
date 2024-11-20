import React, { Component } from "react";
import { CounterContainer, CounterButton, CounterValue } from "../styles/CounterStyles";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Counter mounted with initial count:", this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Counter updated, new count:", this.state.count);
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <CounterContainer>
        <h2>Contador</h2>
        <CounterValue isPositive={count > 0} isNegative={count < 0}>
          {count}
        </CounterValue>
        <CounterButton onClick={this.handleIncrement}>Incremento</CounterButton>
        <CounterButton onClick={this.handleDecrement}>Decremento</CounterButton>
      </CounterContainer>
    );
  }
}

export default Counter;

