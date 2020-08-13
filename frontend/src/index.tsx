import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LoginButton from './pages/LoginButton'
import LogoutButton from './pages/LogoutButton'
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="auth0-sample-cebasypia.us.auth0.com"
      clientId="DohnJf5OEbkzhMEuHLkzVYzkZOaRpFQq"
      redirectUri={window.location.origin}
    >
      <LoginButton />
      <LogoutButton />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
