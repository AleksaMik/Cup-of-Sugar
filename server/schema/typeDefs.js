const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }
    type Item {
        _id: ID
        name: String
        image: String
        category: Category
    }
    type Rental {
        _id: ID
        rentalDate: String
        items: [Item]
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
        rentals: [Rental]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        categories: [Category]
        user: [User]

    }
    type Mutation {
        addUser(username: String, email: String, password: String): User
    }
`;


module.exports = typeDefs;
