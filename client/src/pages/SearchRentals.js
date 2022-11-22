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
      const products = cart.map((rentals) => rentals._id);

      if (products.length) {
        const { data } = await addRental({ variables: { rental } });
        const rentalData = data.addRental.rental;

        rentalData.forEach((rental) => {
          idbPromise('cart', 'delete', rental);
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
