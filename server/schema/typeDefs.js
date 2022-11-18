const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }
    type Rental {
        _id: ID
        name: String
        description: 
        image: String
        category: Category
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
