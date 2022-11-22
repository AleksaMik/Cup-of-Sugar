import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_RENTAL } from "../utils/mutations";

function PostRentals() {
  const [formState, setFormState] = useState({
    category: "",
    name: "",
    zipcode: "",
    description: "",
  });
  const [addRental] = useMutation(ADD_RENTAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addRental({
        variables: { ...formState },
      });

      window.location.load();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="lend">Lend an item!</h1>
      <br></br>
      <div className="form-center">
        <form className="lendinput" onSubmit={handleFormSubmit}>
          <div className="flex-row space-around my-2">
            <label for="category">Category:</label>
            <select name="category" id="category" onChange={handleChange}>
              <option value="Tools/Equipments">Tools/Equipments</option>
              <option value="Household-Supplies">Household Supplies</option>
              <option value="For-Party">For Party</option>
              <option value="Books">Books</option>
              <option value="For-Kids">For Kids</option>
            </select>
          </div>
          <div className="flex-row space-around my-2">
            <label htmlFor="name">Item Name:</label>
            <input
              placeholder="Hammer"
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-around my-2">
            <label htmlFor="zipcode">Zip Code:</label>
            <input
              placeholder="12345"
              name="zipcode"
              type="text"
              id="zipcode"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-around my-2">
            <label htmlFor="description">Description:</label>
            <textarea
              rows="4"
              cols="30"
              name="description"
              id="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit">Post Rental</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostRentals;
