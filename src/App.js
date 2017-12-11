import React, { Component } from 'react';
import Toggle from './Toggle';


class App extends Component {
  render() {
    return (
      <Toggle
      onToggle={on => console.log('toggle', on)}
      />
    );
  }
}

export default App;
