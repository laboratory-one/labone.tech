import React, { Component } from 'react';

// import css
import './Interview.css';

class Interview extends Component {
  render() {
    return (
      <div className="bg-washed-red mv6-ns mv5 pa3 pa0-ns black-70">
        <div className="relative right--2-ns top--2-ns flex justify-between-ns flex-column flex-row-ns pv3">
          <div>
            <h2 className="f2-ns f3 Primary">q + a</h2>
            <p className="f6">with ami muzuno</p>
          </div>
          <article className="bg-near-white pa0 pt0 mt0-ns pa3-ns pt3-ns mt5 br-100 Interviewer flex flex-column justify-around items-center-ns items-end center ml0-ns mr0-ns">
            <img src={process.env.PUBLIC_URL + '/images/ami.gif'} className="br-100 h4-ns w4-ns h3 w3" title="Kitty staring at you" alt="ami muzuno"/>
            <h1 className="f4-ns f5">Ami Muzuno</h1>
            <p className="lh-copy measure center f6">
              a kind and gentle person who disliked quarrels and abhorred harming innocent people. I like chess and swimming. computers r ~kEwL
            </p>
          </article>
        </div>
        <div className="relative mv6-ns mv5 flex justify-center flex-column items-center-ns">
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              Who is Hype Phyllis?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Hype Phyllis is Hype Phyllis!
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              What is Hype Phyllis?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  The embodiment of Hype!
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              When is Hype Phyllis?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Hype Phyllis is in the here n’ now!
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              Where is Hype Phyllis?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Inside you’re heart!
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              Why is Hype Phyllis?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Because the world needs The Hype.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              How is Hype Phyllis?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  I’m well thanks, and yourself?
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interview;
