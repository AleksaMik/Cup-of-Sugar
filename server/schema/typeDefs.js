const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Rental {
    _id: ID
    name: String
    description: String
    image: String
    zipcode: String
    category: Category
  }
  type Order {
    _id: ID
    name: String
    rentals: [Rental]
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
    rentals: [Rental]
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    category(_id: ID!): Category
    users: [User]
    user(username: String!): User
    me: User
    rentals(category: ID, name: String): [Rental]
    rental(_id: ID!): Rental
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(rental: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    updateRental(_id: ID!, quantity: Int!): Rental
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
