import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => ({
    value: state.counter.value,
    isShown: state.counter.isShown,
  }));

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.isShown && <div className={classes.value}>{counter.value}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

class Counterer extends Component {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div
          className={
            (this.props.isCounterShown ? "" : classes.hidden + " ") +
            classes.value
          }
        >
          {this.props.counter}
        </div>
        <div>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.increase}>Increment by 5</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </div>
        <button onClick={this.props.toggle}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isCounterShown: state.isCounterShown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    increase: () => dispatch(counterActions.increase(5)),
    toggle: () => dispatch(counterActions.toggleCounter()),
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
