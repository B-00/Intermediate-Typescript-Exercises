export function nth(input: number): number {
  if (input <= 0) {     
    throw new Error('Prime is not possible');
  }

  const primes = [2];
  let i = 1;
  
  while (primes.length < input) {
    i += 1;
    if (primes.every(p => i % p > 0)) {
      primes.push(i);
    }
  }
  return primes[input - 1];
}