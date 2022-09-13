import React, { Component } from "react";
import Counter from "./counterComponentV4";
class CountersV1 extends Component {
  state = {
    counters: [
      { product_id: 1, value: 5 },
      { product_id: 2, value: 10 },
      { product_id: 3, value: 0 },
      { product_id: 4, value: 0 },
    ],
  };
  render() {
    return <div>{this.renderProduct()}</div>;
  }

  renderProduct() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm  m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.product_id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              counter={counter}
            >
              <h4>Counter #{counter.product_id}</h4>
            </Counter>
          );
        })}
      </div>
    );
  }

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(
      (c) => c.product_id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Handle Reset");
    this.setState({
      counters: this.state.counters.map((c) => {
        c.value = 0;
        return c;
      }),
    });
  };

  handleIncrement = (counter) => {
    console.log("Handle Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    console.log("Handle Decrement", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
}

export default CountersV1;
