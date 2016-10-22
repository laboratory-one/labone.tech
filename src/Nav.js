import React, { Component } from 'react';
import { Link } from 'react-scroll';

// import css
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="relative top-2 left-2-ns flex-column flex-row-ns flex justify-between w-100 border-box pa3 pa4-ns b--dashed bt bb">
        <Link
          className="link dim black-70 f5 mr3"
          to="interview"
          smooth={true}
          duration={500}
        >
          q + a
        </Link>
        <a className="link dim black-70 f5 mr3 sick" href="https://twitter.com/laboratory_one" title="Twitter">twitter</a>
        <Link
          className="link dim black-70 f5 mr3"
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
