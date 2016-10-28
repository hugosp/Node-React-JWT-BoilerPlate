import React from 'react';
import {Link} from 'react-router';
import Auth from '../modules/Auth';


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    let self = this;

    let xhr = new XMLHttpRequest();
    xhr.open('get', '/api/profile');
    xhr.setRequestHeader('Content-type', 'application/x-access-token');
    // set the authorization HTTP header
    xhr.setRequestHeader('x-access-token', Auth.getToken());
    xhr.responseType = 'json';
    xhr.onload = function() {
      let state = {};

      if (this.status == 200) {
        state.user = this.response;
        self.setState(state);
     }
    };
    xhr.send();
  }
  render() {

    return (
      <div className="container">
        <h5>User Details</h5>
        <code>Name : {this.state.user.user}</code><br />
        <code>Email : {this.state.user.email}</code>
        

      </div>
    );
  }

}

export default Profile;