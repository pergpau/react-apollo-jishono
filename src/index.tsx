import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { DataContextProvider, DataContext } from "./Contexts/DataContext";

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let uri: string
if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:8082/query'
} else {
  uri = 'https://go-graphql-jishono.herokuapp.com/query'
}

const httpLink = new HttpLink({ uri })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
