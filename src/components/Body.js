import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomeNav from './HomeNav';
import HomeDisplay from './HomeDisplay';
import EnrollmentNav from './EnrollmentNav';
import EnrollmentDisplay from './EnrollmentDisplay';


export default class BodyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Body">
        <Route path="/" exact component={HomeNav}/>
        <Route path="/" exact render={() => <HomeDisplay studentName={this.props.studentName}/>} />
        <Route path="/enrollment" exact component={EnrollmentNav}/>
        <Route path="/enrollment"  exact component={EnrollmentDisplay}/>
        <Route path="/enrollment#/checklist" exact component={EnrollmentNav}/>
        <Route path="/enrollment#/checklist"  exact component={EnrollmentDisplay}/>
        <Route path="/enrollment#/payment" exact component={EnrollmentNav}/>
        <Route path="/enrollment#/payment"  exact component={EnrollmentDisplay}/>


      </div>
      //Add display route here?
    )
  }
}
