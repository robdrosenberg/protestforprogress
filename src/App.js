import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import logo from './logo.svg';
import './App.css';

import Protests from './components/protests'

const client = new ApolloClient({
  uri: "https://api.8base.com/ckbfrll7d000208l6acny1hqp"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Protests />
    </ApolloProvider>
  );
}

export default App;
