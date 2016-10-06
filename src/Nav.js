import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="relative top-2 left-2 flex justify-between w-100 border-box pa3 b--dashed bt bb ">
        <a className="link dim black f5 mr3" href="#" title="Questions and Answers">q + a</a>
        <a className="link dim black f5 mr3" href="#" title="Shows">shows</a>
        <a className="link dim black f5 mr3 sick" href="https://soundcloud.com/hypephyllis" title="SoundCloud">sound-cloud</a>
        <a className="link dim black f5 mr3 sick" href="https://www.youtube.com/hypephyllis" title="YouTube">youtubes</a>        
        <a className="link dim black f5" href="#" title="Connect">connect</a>
      </nav>
    );
  }
}

export default Nav;
