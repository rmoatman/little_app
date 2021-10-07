import React from 'react';
import ReactToPrint from "react-to-print";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
  class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Navbar />
          <Card />
          <Card />
          <Card />
        </div>
      );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
