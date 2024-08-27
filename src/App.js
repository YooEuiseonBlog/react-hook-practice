import { Component, useState } from "react";
import styles from "./css/App.module.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className={`${styles.app}`}>
      <div>
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!(App)</h2>
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
      </div>
    </div>
  );
};

class AppUgly extends Component {
  state = {
    item: 1,
  };

  render() {
    const { item } = this.state;
    return (
      <div className={`${styles.app}`}>
        <div>
          <h1>Hello {item}</h1>
          <h2>Start editing to see some magic happen!(AppUgly)</h2>
          <button onClick={this.incrementItem}>Increment</button>
          <button onClick={this.decrementItem}>Decrement</button>
        </div>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default AppUgly;
