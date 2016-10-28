import Base       from '../components/Base.jsx';
import Home       from '../components/Home.jsx';
import Check      from '../components/Check.jsx';
import LoginForm  from '../components/LoginForm.jsx';
import SignUpForm from '../components/SignUpForm.jsx';
import Profile    from '../components/Profile.jsx';
import Auth       from '../modules/Auth';


const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/check',
      component: Check
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/login',
      component: LoginForm
    },
    {
      path: '/signup',
      component: SignUpForm
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        replace('/');
      }
    },
  ]
};

export default routes;