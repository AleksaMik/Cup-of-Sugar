import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import { StoreProvider } from './utils/GlobalState';
import SavedRentals from "./pages/SavedRentals";
import SearchRentals from "./pages/SavedRentals";
import Navbar from "./components/Navbar";



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navbar/>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<LoginForm />} 
              />
              <Route 
                path="/signup" 
                element={<SignupForm />} 
              />
              <Route 
                path="/save" 
                element={<SavedRentals />} 
              />
              <Route 
                path="/search" 
                element={<SearchRentals />} 
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
