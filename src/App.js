import React, { Component } from 'react';

// import components
import Header from './Header';
import Image from './Image';
import Interview from './Interview';
import Nav from './Nav';

// import css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App code">
        <div className="bg-washed-red">
          <Header />
          <Nav />
        </div>
        <Image />
        <Interview />
      </div>
    );
  }
}

export default App;
