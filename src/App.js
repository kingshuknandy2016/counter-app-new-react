import "./App.css";
import Navbar from "./components/navBar";
import Counters from "./components/countersV2";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { product_id: 1, value: 5 },
      { product_id: 2, value: 10 },
      { product_id: 3, value: 0 },
      { product_id: 4, value: 0 },
    ],
  };

  // This constructor is called only once the instance of the Class is created
  // And here is the right place to initialize the Props here in this class
  constructor(props) {
    super(props);
    console.log(`App - Constructor`);
  }

  //Perfect Place to get Ajax Data From Server
  componentDidMount() {
    // Ajax Call
    // Then call this.setState({movies})
    console.log("App - Mounted");
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

  // When a component is rendered all its children is rendered recursively
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounter={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
