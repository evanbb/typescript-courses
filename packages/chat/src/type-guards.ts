import { ITeam } from './types'

export function isTypedArray<T>(
  arr: unknown[],
  guard: (e: unknown) => e is T,
): arr is T[] {
  return arr.every(guard)
}

export function isTeam(team: unknown): team is ITeam {
  return Boolean(
    typeof team === 'object' &&
      'iconUrl' in team &&
      typeof team.iconUrl !== 'undefined' &&
      'name' in team &&
      typeof team.name !== 'undefined' &&
      'id' in team &&
      typeof team.id !== 'undefined' &&
      'channels' in team &&
      typeof team.channels !== 'undefined' &&
      Array.isArray(team.channels),
  )
}

const a: unknown[] = []
if (isTypedArray(a, isTeam)) {
  a.map(team => {
    console.log(team.name)
  })
}
