import {gql} from '@apollo/client';

export const QUERY_USER = gql`
{
    user {
      firstName
      lastName
      rentals {
        _id
       items {
         _id
          name
          description
        }
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_RENTALS = gql`
  query getRentals($category: ID) {
    rentals(category: $category) {
      _id
      name
      description
      quantity
      category {
        _id
      }
    }
  }
`;