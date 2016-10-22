import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div className="relative top-2 mv6-ns mv5">
        <img src="http://placehold.it/1000x618" className="w-100" role="presentation" />
        <p className="tr black-70 f6 f5-ns">this is a placeholder image. :)</p>
      </div>
    );
  }
}

export default Image;
