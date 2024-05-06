import { isTypedArray } from '.';

const numberGuard = (value: unknown): value is number =>
  typeof value === 'number';

isTypedArray([], numberGuard); // $ExpectType boolean
