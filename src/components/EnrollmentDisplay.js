import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import EnrollmentNav from './EnrollmentNav';

export default class EnrollmentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationSubmited: true,
      name:'',
      email: '',
      ssn: '',
      phone:'',
      ref1Name: '',
      ref1Email: '',
      ref2Name: '',
      ref2Email: '',
      ref3Name: '',
      ref3Email: '',
      ref4Name: '',
      ref4Email: '',
    }
  }

  handleChange(event) {
    event.preventDefault();
    let stateName = event.target.name;
    let val = event.target.name;
    // console.log(stateName);
    this.setState({
      stateName: val,
    });
  }

  render() {
    return (
      <div className="DisplayContainer">
        <div id="checklist-container">
          <h3>
            Enrollment Checklist:
          </h3>
          <div id="checkbox-outer-container">
            <div id="checkbox-container">
              <div>
                <div className="box">X</div>
                <div>Application</div>
              </div>
              <div>
                <div className="box">X</div>
                <div>Personal Statement</div>
              </div>
              <div>
                <div className="box"></div>
                <div>Resume</div>
              </div>
              <div>
                <div className="box"></div>
                <div>Transcript</div>
              </div>
              <div>
                <div className="box"></div>
                <div>References</div>
              </div>
            </div>
          </div>
        </div>

        <div id="application-container">
          {this.state.applicationSubmited ?
            <div>
              <h3>
                Application Form: Already Submitted
              </h3>
              <form>
                <div className="col-12">
                  <label className="col-4">Name: </label>
                  <input disabled className="col-8" type='text' name='name' onChange={(event) => {this.handleChange(event)}}/>
                </div>
                <div className="col-12">
                  <label className="col-4">Email: </label>
                  <input disabled className="col-8" type='text' name='email' onChange={(event) => {this.handleChange(event)}}/>
                </div>
                <div className="col-12">
                  <label className="col-4">Phone Number: </label>
                  <input disabled className="col-8" type='text' name='phone' onChange={(event) => {this.handleChange(event)}}/>
                </div>
                <div className="col-12">
                  <label className="col-4">SSN: </label>
                  <input disabled className="col-8" type='password' name='ssn' onChange={(event) => {this.handleChange(event)}}/>
                </div>
              </form>
            </div>
            :

            <div>
              <h3>
                Application Form:
              </h3>
              <form>
                <div className="col-12">
                  <label className="col-4">Name: </label>
                  <input className="col-8" type='text' name='name' onChange={(event) => {this.handleChange(event)}}/>
                </div>
                <div className="col-12">
                  <label className="col-4">Email: </label>
                  <input className="col-8" type='text' name='email' onChange={(event) => {this.handleChange(event)}}/>
                </div>
                <div className="col-12">
                  <label className="col-4">Phone Number: </label>
                  <input className="col-8" type='text' name='phone' onChange={(event) => {this.handleChange(event)}}/>
                </div>
                <div className="col-12">
                  <label className="col-4">SSN: </label>
                  <input className="col-8" type='password' name='ssn' onChange={(event) => {this.handleChange(event)}}/>
                </div>
              </form>
            </div>
          }
        </div>

        <div id="personal-statement">
          <h3>
            Personal Statement:
          </h3>
          <textarea rows="6" cols="70">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </textarea>
        </div>

        <div id="resume-section">
          <h3>
            Resume:
          </h3>
          <button type="button" className="btn btn-default">
            <span className="glyphicon glyphicon-cloud-upload"></span>
            <div>  </div>
              Upload
          </button>
        </div>

        <div id="transcript-section">
          <h3>
            Transcript:
          </h3>
          <button type="button" className="btn btn-default">
            <span className="glyphicon glyphicon-cloud-upload"></span>
            <div>  </div>
              Upload
          </button>
        </div>

        <div id="reference-section">
          <h3>
            References:
          </h3>
          <form>
            <div className="col-12">
              <label className="col-4">Reference 1: </label>
              <input className="col-4" type='text' placeholder="Name" name='ref1Name' onChange={(event) => {this.handleChange(event)}}/>
              <input className="col-4" type='text' placeholder="Email" name='ref1Email' onChange={(event) => {this.handleChange(event)}}/>
            </div>
            <div className="col-12">
              <label className="col-4">Reference 2: </label>
              <input className="col-4" type='text' placeholder="Name" name='ref2Name' onChange={(event) => {this.handleChange(event)}}/>
              <input className="col-4" type='text' placeholder="Email" name='ref2Email' onChange={(event) => {this.handleChange(event)}}/>
            </div>
            <div className="col-12">
              <label className="col-4">Reference 3: </label>
              <input className="col-4" type='text' placeholder="Name" name='ref3Name' onChange={(event) => {this.handleChange(event)}}/>
              <input className="col-4" type='text' placeholder="Email" name='ref3Email' onChange={(event) => {this.handleChange(event)}}/>
            </div>
            <div className="col-12">
              <label className="col-4">Reference 4: </label>
              <input className="col-4" type='text' placeholder="Name" name='ref4Name' onChange={(event) => {this.handleChange(event)}}/>
              <input className="col-4" type='text' placeholder="Email" name='ref4Email' onChange={(event) => {this.handleChange(event)}}/>
            </div>
            <div className="submit-container">
              <div className="col-4"></div>
              <button type="button" className="btn btn-default col-4">Submit</button>
              <div className="col-4"></div>
            </div>
          </form>
        </div>

        <div id="payment-container">
          <h3>
            Payment Info:
          </h3>
          <div id="payment-info-container">
            <form>
              <div className="col-12">
                <label className="col-4">Card Number: </label>
                <input className="col-8" type="text"/>
              </div>
              <div className="col-12">
                <label className="col-4">Card Owner: </label>
                <input className="col-8" type="text"/>
              </div>
              <div className="col-12">
                <label className="col-3">Expiration Date: </label>
                <input className="col-3" type="month"/>
                <label className="col-3">Security Code: </label>
                <input className="col-3" type="text"/>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
