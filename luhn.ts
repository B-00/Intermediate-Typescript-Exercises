export function valid(digitString: String): Boolean {
  let temp = Array.from(digitString.replaceAll(" ", "").replaceAll("0", ""));
  
  if (temp.length <= 1) {
    return false;
  }

  for (let i = 0; i < temp.length; i++) {
    if (i % 2 === 0) {
      temp[i] = Number(temp[i]) + Number(temp[i]) > 9 ? String((Number(temp[i]) + Number(temp[i])) - 9): String(Number(temp[i]) + Number(temp[i]));
    }
  }

  let newStr = temp.reduce((t, a) => String(Number(t) + Number(a)));

  return Number(newStr) % 10 === 0;
}