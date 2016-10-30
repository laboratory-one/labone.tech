import React, { Component } from 'react';
// import { Mailchimp } from 'mailchimp-api-v3';
// var Mailchimp = require('mailchimp-api-v3')

// import css
import './Subscribe.css';

// setup mailchimp
const apiKey = 'ff7fe1c0cd843adc808c6de45bf3e3d0-us14';
const laboneListId = '132e74b8f2';
// var mailchimp = new Mailchimp(apiKey);

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

    // // handle the click bruh
    // mailchimp.get({
    //   path: `/lists/${laboneListId}`
    // }, function (error, result) {

    //   console.log("clicked");

    //   // notify error to user
    //   if (error) {
    //     this.setState({
    //       failed: true
    //     });
    //     return;
    //   }

    //   // notify success to user
    //   this.setState({
    //     subscribed: true
    //   });
    //   return;
    // });

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
      <div>
        {/*<input type="email" name="userEmail" />*/}
        <div
          className={subscribed || failed
            ? "bg-washed-red ma5-ns ma4 black-70 relative pa4 pointer"
            : "bg-washed-red ma5-ns ma4 black-70 relative pa4 pointer dope"
          }
          onClick={this._handleClick}>
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}

export default Interview;
