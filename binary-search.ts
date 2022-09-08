export function find(haystack: number[], needle: number, start = 0, end = haystack.length - 1): number | string | void {
  if (start > end) {
    throw new Error('Value not in array');
  }
  
  let mid = Math.floor((start + end) / 2);
  let current = haystack[mid];
  
  if (current === needle) {
    return mid;
  } else if (current > needle) {
    return find(haystack, needle, start, mid - 1); 
  } else if (current < needle) {
    return find(haystack, needle, mid + 1, end);
  }
}