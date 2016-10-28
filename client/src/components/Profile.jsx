import React from 'react';
import {Link} from 'react-router';
import request from 'superagent';
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

    request
      .get('/api/profile')
      .set('x-access-token', Auth.getToken())
      .set('Accept', 'application/json')
      .end(function(err, res){
        let state = {};
        if (res.status == 200) {
          state.user = res.body;
          self.setState(state);
        }
      });
  }
  render() {

    return (
      <div className="container">
        <h5>User Details</h5>
        <code>Id : {this.state.user.id}</code><br />
        <code>Name : {this.state.user.user}</code><br />
        <code>Email : {this.state.user.email}</code>
        

      </div>
    );
  }

}

export default Profile;