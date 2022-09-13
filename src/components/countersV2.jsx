import React, { Component } from "react";
import Counter from "./counterComponentV4";
class CountersV1 extends Component {
  render() {
    console.log("Counters - Rendered");
    return <div>{this.renderProduct()}</div>;
  }

  renderProduct() {
    const { onReset, onDecrement, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm  m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => {
          const { product_id } = counter;
          return (
            <Counter
              key={product_id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            >
              <h4>Counter #{product_id}</h4>
            </Counter>
          );
        })}
      </div>
    );
  }
}

export default CountersV1;
