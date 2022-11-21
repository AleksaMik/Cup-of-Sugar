import React, { useState } from "react";
import { useMutation } from "@apollo/client";

function PostRentals() {
  return (
    <div>
      <h1 className="lend">Lend an item!</h1>
      <br></br>
      <div className="form-center">
        <form className="lendinput">
          <div className="flex-row space-around my-2">
            <input type="radio" id="tool" name="tool" value="tool" />
            <label for="tool">Tool</label>
            <input
              type="radio"
              id="appliance"
              name="appliance"
              value="appliance"
            />
            <label for="appliance">Appliance</label>
            <input type="radio" id="other" name="other" value="other" />
            <label for="other">Other</label>
          </div>
          <div className="flex-row space-around my-2">
            <label htmlFor="name">Item Name:</label>
            <input placeholder="Hammer" name="name" type="text" id="name" />
          </div>
          <div className="flex-row space-around my-2">
            <label htmlFor="zip">Zip Code:</label>
            <input placeholder="12345" name="zip" type="text" id="zip" />
          </div>
          <div className="flex-row space-around my-2">
            <label htmlFor="description">Description:</label>
            <textarea rows="4" cols="30" name="description" id="description">
              text
            </textarea>
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
