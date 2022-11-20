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
        quantity: Int
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
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        category(_id: ID!): Category
        categories: [Category]
        user: User
        rentals(category: ID, name: String): [Rental]
        rental(_id: ID!):  Rental
        order(_id: ID!): Order
    }
    type Mutation {
        addUser(username: String, email: String, password: String): User
        addOrder(rental: [ID]!): Order
        updateUser(username: String, email: String, password: String): User
        updateRental(_id: ID!, quantity: Int!): Rental
        login(email: String!, password: String!): Auth
    }
`;


module.exports = typeDefs;
