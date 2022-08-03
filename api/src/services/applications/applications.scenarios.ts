import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ApplicationCreateArgs>({
  application: {
    one: {
      data: {
        position: 'String',
        stage: 'String',
        notes: 'String',
        offer: 'String',
      },
    },
    two: {
      data: {
        position: 'String',
        stage: 'String',
        notes: 'String',
        offer: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
