import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store/store.js';
import App from './components/App.jsx';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import 'tailwindcss/tailwind.css';
import './styling/application.scss';
import './styling/bootstrap.min.css';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: '/api/graphql/',
});

const client = new ApolloClient({
  cache,
  link,
});

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
