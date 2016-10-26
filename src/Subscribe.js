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
      failed: false,
      subscribed: false
    };
  }

  // subscribe to the laboratory one mailing list
  _handleClick() {
    // handle the click bruh
    console.log("clicked");

    // notify success to user
    this.setState({
      subscribed: true
    });

    // notify error to user
    this.setState({
      failed: true
    });

  }

  renderMessage() {
    const {
      subscribed,
      failed,
    } = this.state;

    let message = <p className="tc">Subscribe to our<br />mailing list</p>;
    message = subscribed ? <p className="tc">You've been subscribed to the<br />Laboratory One mailing list.<br />Thanks!</p> : message;
    message = failed ? <p className="tc">um... we failed to subscribe you. Please try again.</p> : message;

    return message;
  }

  render() {
    const {
      subscribed,
      failed,
    } = this.state;

    return (
      <div
        className={subscribed || failed
          ? "bg-washed-red ma5-ns ma4 black-70 relative pa4 pointer"
          : "bg-washed-red ma5-ns ma4 black-70 relative pa4 pointer dope"
        }
        onClick={this._handleClick}>
        {this.renderMessage()}
      </div>
    );
  }
}

export default Interview;
