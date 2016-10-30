import React, { Component } from 'react';

// import css
import './Subscribe.css';

class Interview extends Component {
  constructor() {
    super();

    // bindings
    this._handleClick = this._handleClick.bind(this);
    this.renderMessage = this.renderMessage.bind(this);

    // declare state
    this.state = {
      clicked: false
    };
  }

  // subscribe to the laboratory one mailing list
  _handleClick() {
    // handle the click bruh
    this.setState({
      clicked: true
    });


  }

  renderMessage() {
    const {
      clicked,
    } = this.state;

    // declare default state
    const defaultState = <p className="tc">Subscribe to our<br />mailing list</p>;

    // handle clicked state
    const message = clicked ? <p className="tc">Thanks!</p> : defaultState;

    return message;
  }

  render() {
    const {
      clicked,
    } = this.state;

    return (
      <div>
        <a
          href="http://eepurl.com/clyYPH"
          className={clicked
            ? "bg-washed-red ma5-ns ma4 black-70 relative pa4 db pointer"
            : "bg-washed-red ma5-ns ma4 black-70 relative pa4 db dope"
          }
          onClick={this._handleClick}>
          {this.renderMessage()}
        </a>
      </div>
    );
  }
}

export default Interview;
