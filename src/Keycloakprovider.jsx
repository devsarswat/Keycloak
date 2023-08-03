import React from 'react';
import Keycloak from 'keycloak-js';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloakConfig from './keycloakConfig';
import App from './App';

const Keycloakprovider = () => {
  const keycloak = new Keycloak(keycloakConfig);

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  );
};
export default Keycloakprovider;