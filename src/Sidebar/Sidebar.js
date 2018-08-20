import React, { Component } from 'react';
import './Sidebar.css'
class Sidebar extends Component {
  render() {
    return (
      <div className="background">
        <div className="iconBox">
          <i class="material-icons icon">
          {this.props.icon1}
          </i>
        </div>
        <div className="iconBox">
          <i class="material-icons icon">
          {this.props.icon2}
          </i>
        </div>
        <div className="iconBox">
          <i class="material-icons icon">
          {this.props.icon3}
          </i>
        </div>
        <div className="iconBox">
          <i class="material-icons icon">
          {this.props.icon4}
          </i>
        </div>
        <div className="iconBox">
          <i class="material-icons icon">
          {this.props.icon5}
          </i>
        </div>
      </div>
    );
  }
}

export default Sidebar;
