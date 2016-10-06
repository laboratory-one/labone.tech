import React, { Component } from 'react';
import { Element } from 'react-scroll';

// import components
import Footer from './Footer';
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
        <Element name="home" className="bg-washed-red black-70">
          <Header />
          <Nav />
        </Element>
        <Image />
        <Element name="interview">
          <Interview />
        </Element>
        <Element name="connect">
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
