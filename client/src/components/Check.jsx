import React from 'react';
import {Link} from 'react-router';
import Auth from '../modules/Auth';


class Check extends React.Component {
  constructor() {
    super();
    this.state = {
      secretData: ''
    };
  }
  componentDidMount() {
    let self = this;

    let xhr = new XMLHttpRequest();
    xhr.open('get', '/api');
    xhr.setRequestHeader('Content-type', 'application/x-access-token');
    // set the authorization HTTP header
    xhr.setRequestHeader('x-access-token', Auth.getToken());
    xhr.responseType = 'json';
    xhr.onload = function() {
      let state = {};

      if (this.status == 200) {
        state.secretData = this.response.message;
        self.setState(state);
     }

    };
    xhr.send();
  }
  render() {

    return (
      <div className="container">
        <h5>check secure API</h5>
        {this.state.secretData && <code>{this.state.secretData}</code>}
        {!this.state.secretData && <code>User not authenticated</code>}

      </div>
    );
  }

}

export default Check;