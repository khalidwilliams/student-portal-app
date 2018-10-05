import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import BodyComponent from './components/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName:"Khalid"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src="https://recess-images.imgix.net/guild_logos/guild/guild_color.svg" id="guild-logo"/>
          </div>
          <div className="nav-links-container">
            <div className="home-link-container">
              <Link to="/"> Home </Link>
            </div>
            <div className="course-link-container">
              <div> Courses </div>
            </div>
            <div className="enrollment-link-container">
              <Link to="/enrollment"> Enrollment </Link>
            </div>
            <div className="logout-link-container">
              <div> Log Out </div>
            </div>
          </div>
        </header>
        <BodyComponent studentName={this.state.studentName} />
      </div>
    );
  }
}

export default App;
