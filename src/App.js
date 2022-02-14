import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';

import { AmplifyChatbot } from '@aws-amplify/ui-react/legacy';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
 
  return (
    <div className='app'>

   <AmplifyChatbot
    botName="lexd3071039"
    botTitle="Arine"
    welcomeMessage="Hello, how can I help you?"
  />
    <Authenticator  socialProviders={[ 'google']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
        <app></app>
    </Authenticator>

 
    </div>

  );
}
 