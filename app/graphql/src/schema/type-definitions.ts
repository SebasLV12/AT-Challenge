import { gql } from "apollo-server-express";

// add your type definitions here
export const typeDefs = gql`
  type Query {
    getStatus: String
  }
`;
