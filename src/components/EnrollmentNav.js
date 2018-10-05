import React, { Component } from 'react';
import {
  HashRouter as hRouter,
  Route,
  Link
} from 'react-router-dom';

export default class EnrollmentNav extends Component {

  render() {
    /*
      FIX THIS NAV LIST
    */
    return (
      <div className="NavBarComponent-container">
        <hRouter hashType="noslash">
          <ul className="nav-list">
            <li>
              <Link to={{
                pathname: "/enrollment",
                hash:"/checklist"
              }}>
                Checklist
              </Link>
              <ul className="sublist" id="checklist-list">
                <li>
                  <Link to={{
                    pathname: "/enrollment#/checklist",
                    hash: '/appform'
                  }} >
                    Application
                  </Link>
                </li>
                <li>
                  <Link to={{
                    pathname: "/enrollment#/checklist",
                    hash: '/personalStatement'
                  }} >
                    Personal Statement
                  </Link>
                </li>
                <li>
                  <Link to={{
                    pathname: "/enrollment#/checklist",
                    hash: '/resume'
                  }} >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to={{
                    pathname: "/enrollment#/checklist",
                    hash: '/transcript'
                  }} >
                    Transcript
                  </Link>
                </li>
                <li>
                  <Link to={{
                    pathname: "/enrollment#/checklist",
                    hash: '/references'
                  }} >
                    References
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={{
                pathname: "/enrollment",
                hash: '#payment'
              }} >
                Payment
              </Link>
            </li>
          </ul>
        </hRouter>
      </div>
    )
  }
}
