import React from "react";
// import Navbar from "../components/Navbar";
// import Category from "../components/Category";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";

const Home = () => {
  return (
    <div className="container">
     <LoginForm/>
     <SignupForm/>
     {/* <Category/> */}
    </div>
  );
};

export default Home;