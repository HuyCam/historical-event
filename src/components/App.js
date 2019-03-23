import React, { Component } from 'react';

// Container import
import DateForm from '../containers/cnt-date-form';
import Fact from '../containers/cnt-fact';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Historical Event App</h1>
        <DateForm />
        <Fact />
      </div>
    );
  }
}

export default App;
