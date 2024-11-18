import { gql } from "apollo-server-express";

// add your type definitions here
export const typeDefs = gql`
  type Query {
    getStatus: String
  }
  type Mutation {
    login(username: String!, password: String!): LoginResponse!
  }

  type LoginResponse {
    success: Boolean!
    message: String
    token: String
  }
`;
