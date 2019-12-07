export const faker = require('Faker');

export function times<T>(n: number, iterator: () => T): T[] {
  const accum = Array(Math.max(0, n));
  for (let i = 0; i < n; i++) {
    accum[i] = iterator();
  }
  return accum;
}
