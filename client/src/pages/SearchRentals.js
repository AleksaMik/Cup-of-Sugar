import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
// import Jumbotron from '../components/Jumbotron';
import { ADD_RENTAL } from '../utils/mutations';
// import { idbPromise } from '../utils/helpers';

function Success() {
  const [addRental] = useMutation(ADD_RENTAL);

  useEffect(() => {
    async function SaveRental() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addRental({ variables: { rentals } });
        const rentalsData = data.addRental.rentals;

        rentalsData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 5000);
    }

    SaveRental();
  }, [addRental]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
      </Jumbotron>
    </div>
  );
}

export default Success;
