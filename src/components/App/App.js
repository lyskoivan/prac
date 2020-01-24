import React, { Component } from 'react';

import MyComponent from '../MyComponent/MyComponent';

class App extends Component {
  state = {
    something: 'for MyCcomponent from App',
  };

  changeSomething = () => {
    this.setState(prevState => {
      return { something: `${prevState} new` };
    });
  };

  render() {
    const { something } = this.state;

    return <MyComponent something={something} />;
  }
}

export default App;
