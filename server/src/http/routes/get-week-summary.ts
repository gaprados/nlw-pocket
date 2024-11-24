import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../services/get-week-summary'
import { z } from 'zod'
import { authenticateUserHook } from '../hooks/authenticate-user'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/summary',
    {
      onRequest: [authenticateUserHook],
      schema: {
        tags: ['goals'],
        description: 'Get week summary',
        response: {
          200: z.object({
            completed: z.number(),
            total: z.number(),
            goalsPerDay: z.record(
              z.string(),
              z.array(
                z.object({
                  id: z.string(),
                  title: z.string(),
                  completedAt: z.string(),
                })
              )
            ),
          }),
        },
      },
    },
    async (_request, reply) => {
      const { summary } = await getWeekSummary()

      return reply.send(summary)
    }
  )
}
