import React, { Component } from 'react';
import './Sidebar.css'
class Sidebar extends Component {
  render() {
    return (
      <div className="background">
        <div className="iconBox">
          <a href="#"><i class="material-icons icon">
          {this.props.icon1}
          </i></a>
        </div>
        <div className="iconBox">
          <a href="#"><i class="material-icons icon">
          {this.props.icon2}
          </i></a>
        </div>
        <div className="iconBox">
          <a href="#"><i class="material-icons icon">
          {this.props.icon3}
          </i></a>
        </div>
        <div className="iconBox">
          <a href="#"><i class="material-icons icon">
          {this.props.icon4}
          </i></a>
        </div>
        <div className="iconBox">
          <a href="#"><i class="material-icons icon">
          {this.props.icon5}
          </i></a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
