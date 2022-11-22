import React from "react";
import RentalsList from "../components/RentalsList";
import Category from "../components/Category";

function Home() {
  return (
    <div className="container">
      <h1 className="about">Cup of Sugar</h1>
      <img src="/images/neighbours.jpg" alt="" className="neighbors"></img>
      <h2 className="about">
        <p>Welcome to Cup of Sugar!</p>
        <p>
          Here you can either lend or borrow tools, equipments and much more
          from your neighbors!
        </p>
        <p>Sign up or login to begin lending and borrowing!</p>
      </h2>
      <Category />
      <RentalsList />
    </div>
  );
}

export default Home;
