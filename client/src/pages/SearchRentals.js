import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function SearchRentals() {
  const {data} = useQuery(Query_User);
  let user;

  if (data) {
    user = data.user;
  }
  return (
    <div>SearchRentals</div>
  )
}

export default SearchRentals