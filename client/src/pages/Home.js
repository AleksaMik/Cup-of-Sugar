import React from "react";
// import Navbar from "../components/Navbar";
// import Cart from "../components/Cart";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";

const Home = () => {
  return (
    <div className="container">
     <LoginForm/>
     <SignupForm/>
    </div>
  );
};

export default Home;