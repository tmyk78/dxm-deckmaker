import React, { Component } from 'react';

import Greeting from './greeting';

import Test from './test';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  render() {
    return(
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <Greeting name={this.state.name} />
        <Test />
      </div>
    );
  }
}

export default App;
