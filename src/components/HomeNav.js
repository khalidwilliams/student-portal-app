import React, { Component } from 'react';
import {
  HashRouter as hRouter,
  Route,
  Link
} from 'react-router-dom';

export default class HomeNav extends Component {

  render() {
    return (
      <div className="NavBarComponent-container">
        <hRouter hashType="noslash">
          <ul className="nav-list">
            <li>
              <Link to={{
                pathname: "/",
                hash:"#current"
              }}>
                Current
              </Link>
            </li>
            <li>
              <Link to={{
                pathname: "/",
                hash: '#advisors'
              }} >
                Advisors
              </Link>
            </li>
            <li>
              <Link to={{
                pathname: "/",
                hash: '#path'
              }} >
                Path
              </Link>
            </li>
            <li>
              <Link to={{
                pathname: "/",
                hash: '#help'
              }} >
                Help
              </Link>
            </li>
          </ul>
        </hRouter>
      </div>
    )
  }
}
