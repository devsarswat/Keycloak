import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const App = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  return (
    <div>
      <h1>Hello, authenticated user!</h1>
      <button onClick={() => keycloak.logout()}>Logout</button>
    </div>
  );
};

export default App;
