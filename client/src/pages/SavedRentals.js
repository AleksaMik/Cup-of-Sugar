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
        <Link to="/">← Back to Rentals</Link>

        {user ? (
          <>
            <h2>
              Orders History for {user.username}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <div className="flex-row">
                  {order.rentals.map(({ _id, image, name }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/rental/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ): null}
      </div>
    </>
  );
}

export default SavedRentals;
