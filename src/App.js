import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bar1">
          <Sidebar
            icon1="youtube_searched_for"
            icon2="get_app"
            icon3="video_library"
            icon4="favorite"
            icon5="settings"
          />
        </div>
        <div>
        </div>
        <div className="bar2">
          <Sidebar
            icon1="account_circle"
            icon2="history"
            icon3="home"
            icon4="mail_outline"
            icon5="notifications"
          />
        </div>
      </div>
    );
  }
}

export default App;
