import React from 'react';
import {Link} from 'react-router';
import Auth from '../modules/Auth';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
    };
  }
  processForm(event) {
    event.preventDefault();

    let self = this;
    let history = this.props.history;
    let user = 'email=' + encodeURIComponent(this.refs.email.value)
             + '&password=' + encodeURIComponent(this.refs.password.value);

    // --- AJAX BABY ---------------------------------------------
    let xhr = new XMLHttpRequest();
    xhr.open('post', '/api/authenticate');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.onload = function() {
      let state = {};
      if (this.status == 200) {               // success
        state.errorMessage = '';
        self.setState(state);
        Auth.authenticateUser(this.response.token);
        history.replace('/');
      } else {
        state.errorMessage = this.response.message;
        self.setState(state);
      }
    };
    xhr.send(user);
    localStorage.removeItem('successMessage');
  }
  render() {
    const success = localStorage.getItem('successMessage');
    return (
      <div>
        <form action="/" onSubmit={this.processForm.bind(this)}>
          <h2>Login</h2>

          {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>}
          { success && <p className="success-message">{success}</p>}
          <input type="text" ref="email" placeholder="Email"/>
          <input type="password" ref="password" placeholder="Password"/>
          <button type="submit">Log in</button>

          <h5>Don't have an account? <Link to={'/signup'}>Create one</Link></h5>
        </form>
      </div>
    );
  }

}

export default LoginForm;