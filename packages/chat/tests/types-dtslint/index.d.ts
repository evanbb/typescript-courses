// import { isTypedArray } from 'chat/src/type-guards'
// export { isTypedArray }

export function isTypedArray<T>(
  arr: unknown[],
  guard: (e: unknown) => e is T,
): arr is T[];
