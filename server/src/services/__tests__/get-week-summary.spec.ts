import { describe, it, expect } from 'vitest'
import dayjs from 'dayjs'
import { makeUser } from '../../../tests/factories/make-user'
import { makeGoalCompletion } from '../../../tests/factories/make-goal-completion'
import { getWeekSummary } from '../get-week-summary'
import { makeGoal } from '../../../tests/factories/make-goal'

describe('get week summary', () => {
  it('should be able to get week summary', async () => {
    const user = await makeUser()

    const weekStartsAt = dayjs(new Date(2024, 9, 6))
      .startOf('week')
      .toDate()

    const goal1 = await makeGoal({
      userId: user.id,
      title: 'Meditar',
      desiredWeeklyFrequency: 2,
      createdAt: weekStartsAt,
    })
    const goal2 = await makeGoal({
      userId: user.id,
      title: 'Nadar',
      desiredWeeklyFrequency: 1,
      createdAt: weekStartsAt,
    })
    const goal3 = await makeGoal({
      userId: user.id,
      title: 'Ler',
      desiredWeeklyFrequency: 3,
      createdAt: weekStartsAt,
    })

    await makeGoalCompletion({
      goalId: goal1.id,
      createdAt: dayjs(weekStartsAt).add(2, 'day').toDate(),
    })

    await makeGoalCompletion({
      goalId: goal2.id,
      createdAt: dayjs(weekStartsAt).add(2, 'day').toDate(),
    })

    await makeGoalCompletion({
      goalId: goal3.id,
      createdAt: dayjs(weekStartsAt).add(3, 'day').toDate(),
    })

    await makeGoalCompletion({
      goalId: goal3.id,
      createdAt: dayjs(weekStartsAt).add(5, 'day').toDate(),
    })

    const result = await getWeekSummary({
      userId: user.id,
      weekStartsAt,
    })

    expect(result).toEqual({
      summary: {
        completed: 4,
        total: 6,
        goalsPerDay: {
          '2024-10-08': [
            expect.objectContaining({
              title: 'Meditar',
            }),
            expect.objectContaining({
              title: 'Nadar',
            }),
          ],
          '2024-10-09': [
            expect.objectContaining({
              title: 'Ler',
            }),
          ],
          '2024-10-11': [
            expect.objectContaining({
              title: 'Ler',
            }),
          ],
        },
      },
    })
  })
})
