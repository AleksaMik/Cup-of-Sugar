import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function Rental(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        rentQuantity: parseInt(itemInCart.rentQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        rentQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        rentals: { ...rent, rentQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, rentQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/rentals/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} available</div>
      </div>
      <button onClick={addToCart}>Add to rentals</button>
    </div>
  );
}

export default Rental;