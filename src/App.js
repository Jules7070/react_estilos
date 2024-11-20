import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default App;

