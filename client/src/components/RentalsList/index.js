import React, { useEffect } from 'react';
import Rentals from '../Rentals';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_RENTALS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_RENTALS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


function RentalsList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_RENTALS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_RENTALS,
        rentals: data.rentals,
      });
      data.rentals.forEach((rental) => {
        idbPromise('rentals', 'put', rental);
      });
    } else if (!loading) {
      idbPromise('rentals', 'get').then((rentals) => {
        dispatch({
          type: UPDATE_RENTALS,
          rentals: rentals,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterRentals() {
    if (!currentCategory) {
      return state.rentals;
    }

    return state.rentals.filter(
      (rental) => rental.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Available Rentals</h2>
      {state.rentals.length ? (
        <div className="flex-row">
          {filterRentals().map((rental) => (
            <Rentals
              key={rental._id}
              _id={rental._id}
              image={rental.image}
              name={rental.name}
              quantity={rental.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>Please add Item!</h3>
      )}
    </div>
  );
}

export default RentalsList;
