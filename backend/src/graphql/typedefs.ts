import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  input LoginInput {
    email: String!
    password: String!
  }

  input RegisterInput {
    email: String!
    password: String!
    firstname: String!
    lastname: String!
  }

  input BlockContactInput {
    block: Boolean
    blockerId: ID!
    victimId: ID!
  }

  type LoginData {
    currentUser: User
    contacts: [User!]
    blockedIds: [ID!]
  }

  type User {
    id: ID!
    email: String!
    firstname: String!
    lastname: String!
    password: String
    avatar: String
    confirmed: Boolean!
  }

  type Info {
    messages: [String!]
  }

  type Users {
    users: [User!]
  }

  union Data = User | Users | Info | LoginData

  type GQLResult {
    ok: Boolean!
    res: Data
  }

  type Query {
    me: GQLResult
    getAllUserContacts(id: ID): GQLResult
  }

  type Mutation {
    login(input: LoginInput!): GQLResult
    logout: GQLResult
    register(input: RegisterInput!): GQLResult
    blockContact(input: BlockContactInput!): GQLResult
  }
`;
