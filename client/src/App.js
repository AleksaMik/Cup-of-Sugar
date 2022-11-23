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
import { StoreProvider } from "./utils/GlobalState";
import SavedRentals from "./pages/SavedRentals";
import SearchRentals from "./pages/SearchRentals";
import Navbar from "./components/Navbar";
import PostRentals from "./pages/PostRentals";
import Cart from './components/Cart'


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
            <Navbar />
            <Cart />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/SavedRentals" element={<SavedRentals />} />
              <Route path="/SearchRentals" element={<SearchRentals />} />
              <Route path="/post" element={<PostRentals />} />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
