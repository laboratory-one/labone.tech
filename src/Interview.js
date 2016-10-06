import React, { Component } from 'react';

// import css
import './Interview.css';

class Interview extends Component {
  render() {
    return (
      <div className="bg-washed-red mv6 pa3 black-70">
        <div className="relative right--2 flex justify-between pv3">
          <div>
            <h2 className="f2 Primary">q + a</h2>
            <p className="f6">with sailor mercury</p>
          </div>
          <article className="bg-near-white pa3 br-100 Interviewer flex flex-column justify-around items-center">
            <img src={process.env.PUBLIC_URL + '/images/ami.gif'} className="br-100 h4 w4" title="Kitty staring at you" alt="ami muzuno"/>
            <h1 className="f4">Ami Muzuno</h1>
            <p className="lh-copy measure center f6">
              a kind and gentle person who disliked quarrels and abhorred harming innocent people. I like chess and swimming. computers r ~kEwL
            </p>
          </article>       
        </div>
        <div className="pl6 mv6">
          <div className="pv3">
            <h3 className="f3 Primary">
              Who is Hype Phyllis?
            </h3>
            <div className="pa4">
              <blockquote className="ml0 mt0 pl4 bl bw2 b--near-white">
                <p className="f5 lh-copy measure mt0">  
                  Hype Phyllis is Hype Phyllis!
                </p>
              </blockquote>
            </div>          
          </div>
          <div className="pv3">
            <h3 className="f3 Primary">
              What is Hype Phyllis?
            </h3>
            <div className="pa4">
              <blockquote className="ml0 mt0 pl4 bl bw2 b--near-white">
                <p className="f5 lh-copy measure mt0">  
                  The embodiment of Hype!
                </p>
              </blockquote>
            </div>          
          </div>
          <div className="pv3">
            <h3 className="f3 Primary">
              When is Hype Phyllis?
            </h3>
            <div className="pa4">
              <blockquote className="ml0 mt0 pl4 bl bw2 b--near-white">
                <p className="f5 lh-copy measure mt0">  
                  Hype Phyllis is in the here n’ now!
                </p>
              </blockquote>
            </div>          
          </div>
          <div className="pv3">
            <h3 className="f3 Primary">
              Where is Hype Phyllis?
            </h3>
            <div className="pa4">
              <blockquote className="ml0 mt0 pl4 bl bw2 b--near-white">
                <p className="f5 lh-copy measure mt0">  
                  Inside you’re heart!
                </p>
              </blockquote>
            </div>          
          </div>
          <div className="pv3">
            <h3 className="f3 Primary">
              Why is Hype Phyllis?
            </h3>
            <div className="pa4">
              <blockquote className="ml0 mt0 pl4 bl bw2 b--near-white">
                <p className="f5 lh-copy measure mt0">  
                  Because the world needs The Hype.
                </p>
              </blockquote>
            </div>          
          </div>        
          <div className="pv3">
            <h3 className="f3 Primary">
              How is Hype Phyllis?
            </h3>
            <div className="pa4">
              <blockquote className="ml0 mt0 pl4 bl bw2 b--near-white">
                <p className="f5 lh-copy measure mt0">  
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
