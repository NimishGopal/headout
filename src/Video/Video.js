import React, { Component } from 'react';
import './Video.css'
class Video extends Component {
  render() {
    return (
      <div className="videoBox">
        <div className="videoPreview">
          <a href="#"><i class="material-icons videoIcon">
          play_circle_outline
          </i></a>
        </div>
        <div className="videoBoxBelowContainer">
          <p>Video Name</p>
          <a href="#"><i class="material-icons">
          playlist_add
          </i></a>
        </div>
        <div className="videoBoxBelowContainer">
          <p className="text">Channel</p>
          <p className="text">Views</p>
        </div>
      </div>
    );
  }
}

export default Video;
