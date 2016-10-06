import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="relative top-2 mv6">
        <img src="http://placehold.it/1000x618" className="w-100" role="presentation" />
        <p className="tr black-70">some text that talked bout how lit this photo is</p>
      </div>
    );
  }
}

export default Image;
