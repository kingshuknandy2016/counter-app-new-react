import React, { Component } from "react";
class CounterV2 extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    value: this.props.counter.value,
  };

  styles = {
    fontSize: "19px",
    fontWeight: "bold",
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span
          id="custom11"
          style={this.styles}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.handleIncrement(this.props);
          }}
          className="btn btn-success btn-sm m-2"
        >
          Increase
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.product_id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Binding with Event Handler(Onclick of Button Event Handler)
  // Arrow function inherit the this (Current Object) keyword
  //  So instead of Constructor binding object we can use arrow function
  handleIncrement = (product) => {
    console.log("Increment clicked", this, product);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    console.log("Decrement clicked", this);
    this.setState({ value: this.state.value - 1 });
  };
}

export default CounterV2;
