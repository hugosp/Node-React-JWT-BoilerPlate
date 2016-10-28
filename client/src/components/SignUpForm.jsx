import React from 'react';
import {Link} from 'react-router';

class SignUpForm extends React.Component {
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

    let user = 'name=' + encodeURIComponent(this.refs.name.value)
             + '&email=' + encodeURIComponent(this.refs.email.value)
             + '&password=' + encodeURIComponent(this.refs.password.value);

    // create an AJAX request
    let xhr = new XMLHttpRequest();
    xhr.open('post', '/api/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.onload = function() {
      let state = {};
      if (this.status == 200) {                 //  if success
        state.errorMessage = '';
        self.setState(state);
        localStorage.setItem('successMessage', this.response.message);
        console.log(this.response);
        history.replace('/login');
      } else {
        state.errorMessage = this.response.message;
        self.setState(state);
      }
    };
    xhr.send(user);
  }

  render() {
    return ( 
      <div>
        <form action="/" onSubmit={this.processForm.bind(this)}>
          <h2>Sign Up</h2>

          {this.state.errorMessage && <p className="error-message">{this.state.errorMessage}</p>}
          
          <input type="text" ref="name" placeholder="Name"/>
          <input type="text" ref="email" placeholder="Email"/>
          <input type="password" ref="password" placeholder="Password"/>
          <button type="submit"> Create New Account </button>

          <h5>Already have an account? <Link to={'/login'}>Log in</Link></h5>
        </form>
      </div>
    );
  }

}

export default SignUpForm;