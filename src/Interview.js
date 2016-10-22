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
              What is Laboratory One?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Laboratory One is a collective of entrepreneurs dedicated to technological excellence.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              Where is Laboratory One?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Laboratory One is proud to be based in Edmonton, Alberta. We love our city and we love remote.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              Why is Laboratory One?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Technology moves fast. No one can keep track of it all. We try to stay cutting edge web developers to serve your needs. We love web development and you'll love our work
                </p>
              </blockquote>
            </div>
          </div>
          <div className="pv3">
            <h3 className="f3-ns f5 Primary">
              How is Laboratory One?
            </h3>
            <div className="pv4-ns">
              <blockquote className="ml0 mt0 pl4-ns pl3 bl bw2 b--near-white">
                <p className="f6 f5-ns lh-copy measure mt0">
                  Laboratory One exists as ad-hoc teams unified as contractors to solve client needs. We recruit and train for excellence. We aren't perfect but we strive to be.
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
