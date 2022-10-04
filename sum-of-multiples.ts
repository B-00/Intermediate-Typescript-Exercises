export function sum(arr: number[], max: number): number {
  if (arr.length === 0) {
    return 0;
  }

  const total = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j: number = 1; j < max; j++) {
      if (arr[i] === 0) {
        break;
      }
      if (j % arr[i] === 0) {
        total.add(j);
      }
    }
  }
  return total.size > 0 ? Number(Array.from(total).reduce((t, c) => Number(t) + Number(c))) : 0;
}