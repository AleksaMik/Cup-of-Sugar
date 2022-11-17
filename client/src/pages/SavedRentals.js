import React from 'react';
import { Link } from 'react-router-dom';


import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function SavedRentals() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Items</Link>

        {user ? (
          <>
            <h2>
              Rentals History for {user.firstName} {user.lastName}
            </h2>
            {user.rentals.map((rentals) => (
              <div key={rentals._id} className="my-2">
                <div className="flex-row">
                  {order.rentals.map(({ _id, image, name }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/rentals/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default SavedRentals;
