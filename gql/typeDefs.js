const { gql } = require('apollo-server');
const typeDefs = gql`
  type User {
    id: ID,
    name: String,
    username: String,
    email: String,
    website: String,
    description: String,
    password: String,
    avatar: String,
    createdAt: String,
  }

  type Token {
    token: String
  }

  type Query {
    getUser: User
  }

  input UserInput {
    name: String!,
    username: String!,
    email: String!,
    password: String!
  }

  input LoginInput {
    email: String!,
    password: String!
  }

  type Mutation {
    newUser(input: UserInput): User
    authentication(input: LoginInput): Token
  }
`;

module.exports = typeDefs;