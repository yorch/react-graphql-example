import { ApolloProvider } from '@apollo/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from 'App';
import apolloClient from 'apolloClient';

import './index.css';

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
}
