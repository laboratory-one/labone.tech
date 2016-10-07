import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Footer extends Component {
  render() {
    return (
      <footer className="relative ph3-ns pv6-ns pv5 b--black-70 b--dashed bt bb-0 bl-0 br-0">
        <a href="mailto:" className="link b f3-ns f4 dim black-70 lh-solid">hello@hypephyllis.com</a>
        <div className="mt5-ns mt4">
          <Link
            className="f6 dib-ns db pr2 black-70 dim"
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
          >
            home
          </Link>
          <Link
            className="f6 dib-ns db pr2 black-70 dim"
            to="interview"
            smooth={true}
            duration={500}
          >
            q + a
          </Link>
          <Link
            className="f6 dib-ns db pr2 black-70 dim strike"
            to="shows"
            smooth={true}
            duration={500}
          >
            shows
          </Link>
          <a className="f6 dib-ns db pr2 black-70 dim strike" href="https://soundcloud.com/hypephyllis" title="SoundCloud">sound-cloud</a>
          <a className="f6 dib-ns db pr2 black-70 dim strike" href="https://www.youtube.com/hypephyllis" title="YouTube">youtubes</a>
          <Link
            className="f6 dib-ns db pr2 black-70 dim"
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
