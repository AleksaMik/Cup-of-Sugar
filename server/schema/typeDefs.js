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
        order: [Order]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        categories: [Category]
        users: [User]
        user: User
        rentals: [Rental]
        rental(name:String, description: String, quantity: Int):  Rental
    }
    type Mutation {
        addUser(username: String, email: String, password: String): User
    }
`;


module.exports = typeDefs;
