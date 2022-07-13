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

  input SendMessageInput {
    message: String!
    senderId: String!
    receiverId: String!
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

  type Chat {
    id: ID!
    message: String!
    senderId: String!
    receiverId: String!
    created_at: Date
  }

  type Info {
    info: String!
  }

  type Users {
    users: [User!]
  }

  type Chats {
    chats: [Chat!]
  }

  union Data = User | Chat | Users | Chats | Info | LoginData

  type GQLResult {
    ok: Boolean!
    res: Data
  }

  type Query {
    me: GQLResult
    getMessages(userId1: ID, userId2: ID): GQLResult
    getAllUserContacts(id: ID): GQLResult
  }

  type Mutation {
    login(input: LoginInput!): GQLResult
    sendMessage(input: SendMessageInput!): GQLResult
    logout: GQLResult
    register(input: RegisterInput!): GQLResult
    blockContact(input: BlockContactInput!): GQLResult
  }
`;
