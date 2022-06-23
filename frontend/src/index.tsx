import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/config";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GRAPHQL_SERVER_URL } from "./graphql/config";

console.log("gql url", GRAPHQL_SERVER_URL);
const client = new ApolloClient({
  uri: GRAPHQL_SERVER_URL,
 // credentials: "include",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
