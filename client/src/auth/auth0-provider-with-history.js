import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

//the code in this file comes directly from the Auth0 tutorial
const Auth0ProviderWithHistory = ({ children }) => {
  //these lines call the secret IDs for my AUTH0 account from the .env file
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
    {/* the "children" here is basically how we're rendering the app inside of the
    auth0 wrapper */}
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;