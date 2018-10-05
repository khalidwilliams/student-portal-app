import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomeNav from './HomeNav'

export default class HomeDisplay extends Component {
  render() {
    return (
      <div className="DisplayContainer">
        <h1 id='home-greeting' >
          Welcome back, {this.props.studentName}.
        </h1>

        <div className="home-current-info">
          <h3 className="current-class">
            Currently enrolled in _____________
          </h3>
          <h3 className="current-instructor">
            Instructor: ________________
          </h3>
          <h3 className="current-institution">
            Institution: _________________
          </h3>
        </div>

        <div className="home-advisor-info">
          <div className="advisor ssa">
            <h3>
              Student Success Advisor: _______________
            </h3>
            <span className="btn-container">
              <button>
                Chat
              </button>
              <button>
                Email
              </button>
            </span>
          </div>
          <div className="advisor education-coach">
            <h3>
              Education Coach: _______________
            </h3>
            <span className="btn-container">
              <button>
                Chat
              </button>
              <button>
                Email
              </button>
            </span>
          </div>
        </div>

        <div id="path">
          <h2>
            Your Education path:
          </h2>
          <div id="path-graphic-container">
            <img id="path-graphic" src="https://recess-images.imgix.net/icons/general/education_path.svg?ixlib=rails-2.1.4&auto=compress%2Cformat" />
          </div>
          <div id="path-info-container">
            <h4 id="prior-number">
              X Prior Credits
            </h4>
            <h4 id="completed-number">
              Y Classes Completed
            </h4>
            <h4 id="remaing-number">
              Z Classes Remaining
            </h4>
          </div>
        </div>
        <div id="help-section">
          <h2>
            Help
          </h2>
          <div>
            <a href='#'>
              FAQ
            </a>
          </div>
          <div>
            <a href='#'>
              Contact us
            </a>
          </div>
        </div>
      </div>
    )
  }
}
