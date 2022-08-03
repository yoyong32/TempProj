export const schema = gql`
  type Application {
    id: Int!
    position: String!
    stage: String!
    notes: String!
    submitted: DateTime!
    offer: String!
  }

  type Query {
    applications: [Application!]! @requireAuth
    application(id: Int!): Application @requireAuth
  }

  input CreateApplicationInput {
    position: String!
    stage: String!
    notes: String!
    submitted: DateTime!
    offer: String!
  }

  input UpdateApplicationInput {
    position: String
    stage: String
    notes: String
    submitted: DateTime
    offer: String
  }

  type Mutation {
    createApplication(input: CreateApplicationInput!): Application! @requireAuth
    updateApplication(id: Int!, input: UpdateApplicationInput!): Application!
      @requireAuth
    deleteApplication(id: Int!): Application! @requireAuth
  }
`
