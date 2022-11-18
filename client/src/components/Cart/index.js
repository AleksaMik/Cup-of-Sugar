import React, { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartRentals from '../CartRentals';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
// import './style.css';

// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // useEffect(() => {
  //   if (data) {
  //     stripePromise.then((res) => {
  //       res.redirectToCheckout({ sessionId: data.checkout.session });
  //     });
  //   }
  // }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, rentals: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function submitCheckout() {
    const rentalsIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.rentQuantity; i++) {
        rentalsIds.push(rentalsIds._id);
      }
    });

    getCheckout({
      variables: { rentals: rentalsIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Your Rentals</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartRentals key={item._id} item={item} />
          ))}

          {/* <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong> */}

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>Please login first!</span>
            )}
          </div>
      ) : (
        <h3>
          You have to add items first!
        </h3>
      )}
    </div>
  );
};

export default Cart;
