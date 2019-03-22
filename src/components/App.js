import React, { Component } from 'react';

// Container import
import DateForm from '../containers/cnt-date-form';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Historical Event App</h1>
        <DateForm />
      </div>
    );
  }
}

export default App;
