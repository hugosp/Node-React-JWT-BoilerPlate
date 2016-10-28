import React             from 'react';
import {Link, IndexLink} from 'react-router';
import Auth              from '../modules/Auth';

class Base extends React.Component {
  render() {
    return (
      <div className="container">  
        <header>
          <div className="title">JWT ffs.</div>
          <div className="nav">
            <ul>
              <li><IndexLink to="/">Home</IndexLink></li>
              {Auth.isUserAuthenticated() &&  <li><Link to="/profile">Profile</Link></li> }
              {Auth.isUserAuthenticated() &&  <li><Link to="/logout">Log out</Link></li> }
              {!Auth.isUserAuthenticated() && <li><Link to="/login">Log in</Link></li> }
              {!Auth.isUserAuthenticated() && <li><Link to="/signup">Sign up</Link></li> }
              </ul>
            </div>
        </header>
        <div>
          {this.props.children}
        </div>
      
      </div>
    );
  }
}

export default Base;