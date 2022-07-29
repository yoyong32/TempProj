export const schema = gql`
  type Application {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    applications: [Application!]! @requireAuth
    application(id: Int!): Application @requireAuth
  }

  input CreateApplicationInput {
    title: String!
    body: String!
  }

  input UpdateApplicationInput {
    title: String
    body: String
  }

  type Mutation {
    createApplication(input: CreateApplicationInput!): Application! @requireAuth
    updateApplication(id: Int!, input: UpdateApplicationInput!): Application!
      @requireAuth
    deleteApplication(id: Int!): Application! @requireAuth
  }
`
