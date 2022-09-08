function charOp(letter: string): string {
  return String.fromCharCode(122 - (letter.charCodeAt(0) - 97));
}

export function encode(plainText: string): string {
  const str = plainText.toLowerCase().trim().split(/\s|''/g).join().replace(/,/g, '').replace('.', '');
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let charTranslate = /\d/.test(str[i]) ? str[i] : charOp(str[i]);
    newStr += charTranslate
    if ((i + 1) % 5 === 0) {
      newStr += ' ';
    }
  }
  
  return newStr.trim();
}

export function decode(cipherText: string): string {
  const str = cipherText.toLowerCase().trim().split(/\s|''/g).join().replace(/,/g, '').replace('.', '');
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    let charTranslate = /\d/.test(str[i]) ? str[i] : charOp(str[i]);
    newStr += charTranslate
  }
  
  return newStr;
}