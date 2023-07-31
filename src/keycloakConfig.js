const keycloakConfig = {
    realm: 'DEMO',
    url: 'http://localhost:8080/auth/',
    clientId: 'Demo',
    sslRequired: 'EXTERNAL',
    resource: 'Demo',
    verifyTokenAudience: true,
    useResourceRoleMappings: true,
  };
  
  export default keycloakConfig;
  