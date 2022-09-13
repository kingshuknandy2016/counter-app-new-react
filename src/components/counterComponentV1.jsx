import React, { Component } from "react";
class CounterV1 extends Component {
  state = {
    count: 1,
    tags: [],
  };

  styles = {
    "font-size": "20px",
    "font-weight": "bold",
  };
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new Tag!"}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    );
  }
}

export default CounterV1;
