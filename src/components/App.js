import React, { Component } from 'react';

import SelectAlliance from './SelectAlliance';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div>
        <h1 className="title">DXM DeckMaker</h1>
        <SelectAlliance />
      </div>
    );
  }
}

export default App;
