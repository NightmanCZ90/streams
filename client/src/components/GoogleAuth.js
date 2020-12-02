import React from 'react';
import { OAuthClientID } from '../apis/google.config';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: OAuthClientID
      })
    });
  }

  render() {
    return (
      <div>Google Auth</div>
    )
  }
};

export default GoogleAuth;