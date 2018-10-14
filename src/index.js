import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import gql from "graphql-tag";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://glacial-journey-30419.herokuapp.com/"
});

client
  .query({
    query: gql`
      {
        books {
          title
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
