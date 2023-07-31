import React from 'react';
import ReactDOM from 'react-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web'; 
import keycloakConfig from './keycloakConfig';
import Keycloak from 'keycloak-js'; 
import App from './App';

const keycloak = new Keycloak(keycloakConfig);

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}> 
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
