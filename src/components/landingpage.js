import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
        <img src="https://cdn4.iconfinder.com/data/icons/men-avatars-set-1-dot-version/380/17-512.png" alt="avatar" className="avatar-img"/>
        <div className="banner-text">
          <h1> Software engineer  student</h1>
          <hr/>
          <p>
            AI | Deep Learning | ML | MERN stack (MongoDB, Express.js, React.js, Node.js)
          </p>
          <div className="social-links">
            {/* LinkedIn*/}
            <a href="https://google.com" rel="noopener norefferrer" target="_blank">
            <i className="fa fa-linkedin-square" />
            </a>
            {/* Github*/}
            <a href="https://google.com" rel="noopener norefferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true"/>
            </a>
            {/* FreecodeCamp*/}
            <a href="https://google.com" rel="noopener norefferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true"/>
            </a>
            {/* Facebook*/}
            <a href="https://google.com" rel="noopener norefferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true"/>
            </a>
          </div>
        </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing;
