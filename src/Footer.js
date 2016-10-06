import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Footer extends Component {
  render() {
    return (
      <footer className="ph3 pv6 bt b--black-10 black-70">
        <a href="mailto:" className="link b f3 dim black-70 lh-solid">hello@hypephyllis.com</a>
        <div className="mt5">
          <Link 
            className="f6 dib pr2 mid-gray dim underline"
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
          >
            home
          </Link>         
          <Link 
            className="f6 dib pr2 mid-gray dim underline"
            to="interview"
            smooth={true}
            duration={500}
          >
            q + a
          </Link>    
          <Link 
            className="f6 dib pr2 mid-gray dim3 underline"
            to="shows"
            smooth={true}
            duration={500}
          >
            shows
          </Link>        
          <a className="f6 dib pr2 mid-gray dim" href="https://soundcloud.com/hypephyllis" title="SoundCloud">sound-cloud</a>
          <a className="f6 dib pr2 mid-gray dim" href="https://www.youtube.com/hypephyllis" title="YouTube">youtubes</a>   
          <Link 
            className="f6 dib pr2 mid-gray dim underline"
            to="connect"
            smooth={true}
            duration={500}
          >
            connect
          </Link>          
        </div>
      </footer>
    );
  }
}

export default Footer;
