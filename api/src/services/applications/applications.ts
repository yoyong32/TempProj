import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const applications: QueryResolvers['applications'] = () => {
  return db.application.findMany()
}

export const application: QueryResolvers['application'] = ({ id }) => {
  return db.application.findUnique({
    where: { id },
  })
}

export const createApplication: MutationResolvers['createApplication'] = ({
  input,
}) => {
  return db.application.create({
    data: input,
  })
}

export const updateApplication: MutationResolvers['updateApplication'] = ({
  id,
  input,
}) => {
  return db.application.update({
    data: input,
    where: { id },
  })
}

export const deleteApplication: MutationResolvers['deleteApplication'] = ({
  id,
}) => {
  return db.application.delete({
    where: { id },
  })
}
