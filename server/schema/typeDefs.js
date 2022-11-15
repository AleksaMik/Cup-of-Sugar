const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Category{
        _id: ID
        name: String
    }
    type Item: {
        _id: ID
        name: String
        image: String
        category: Category
    }
    type Rental: {
        _id: ID
        rentalDate: String
        items: [Item]
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        rentals: [Rental]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        categories: [Category]
        user: User
        items(category: ID, name: String): [Product]
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        addItem(_id: ID!, name: String!): Item
        login(email:String!, password: String!): Auth
        updateItem(_id: ID!, name: String): Item
    }
`;



module.exports = typeDefs;
