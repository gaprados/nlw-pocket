import { expect, test } from 'vitest'
import {
  calculateExperienceToLevel,
  calculateLevelFromExperience,
  calculateTotalExperienceForLevel,
} from '../gamification'

test('experience to level', () => {
  const exp1 = calculateExperienceToLevel(1)
  const exp2 = calculateExperienceToLevel(2)
  const exp4 = calculateExperienceToLevel(4)

  expect(exp1).toEqual(0)
  expect(exp2).toEqual(26)
  expect(exp4).toEqual(43)
})

test('total experience to level', () => {
  const exp1 = calculateTotalExperienceForLevel(1)
  const exp2 = calculateTotalExperienceForLevel(2)
  const exp3 = calculateTotalExperienceForLevel(3)
  const exp4 = calculateTotalExperienceForLevel(4)

  expect(exp1).toEqual(0)
  expect(exp2).toEqual(26)
  expect(exp3).toEqual(26 + 33)
  expect(exp4).toEqual(26 + 33 + 43)
})

test('level from experience', () => {
  const lvl1 = calculateLevelFromExperience(10)
  const lvl2 = calculateLevelFromExperience(27)
  const lvl4 = calculateLevelFromExperience(26 + 33 + 43)

  expect(lvl1).toEqual(1)
  expect(lvl2).toEqual(2)
  expect(lvl4).toEqual(4)
})
