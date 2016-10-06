import React, { Component } from 'react';
import { Link } from 'react-scroll';

// import css
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="relative top-2 left-2 flex justify-between w-100 border-box pa3 b--dashed bt bb ">
        <Link 
          className="link dim black f5 mr3"
          to="interview"
          smooth={true}
          duration={500}
        >
          q + a
        </Link>
        <Link 
          className="link dim black f5 mr3"
          to="shows"
          smooth={true}
          duration={500}
        >
          shows
        </Link>        <a className="link dim black f5 mr3 sick" href="https://soundcloud.com/hypephyllis" title="SoundCloud">sound-cloud</a>
        <a className="link dim black f5 mr3 sick" href="https://www.youtube.com/hypephyllis" title="YouTube">youtubes</a>        
        <Link 
          className="link dim black f5 mr3"
          to="connect"
          smooth={true}
          duration={500}
        >
          connect
        </Link>
      </nav>
    );
  }
}

export default Nav;