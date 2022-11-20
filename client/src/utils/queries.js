import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        name
        rentals {
          _id
          name
          description
          quantity
        }
      }
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

export const QUERY_CHECKOUT = gql`
  query getCheckout($rentals: [ID]!) {
    checkout(rentals: $rentals) {
      session
    }
  }
`;

export const QUERY_ALL_RENTALS = gql`
  {
    products {
      _id
      name
      description
      quantity
      category {
        name
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


