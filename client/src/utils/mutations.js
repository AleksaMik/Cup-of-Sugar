import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_RENTAL = gql`
  mutation addRental(
    $category: String!
    $name: String!
    $zipcode: String!
    $description: String!
  ) {
    addRental(
      category: $category
      name: $name
      zipcode: $zipcode
      description: $description
    )
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
