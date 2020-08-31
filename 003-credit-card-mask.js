// https://www.codewars.com/kata/5412509bd436bd33920011bc

// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look
// over your shoulder, you don't want that shown on your screen.Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters
// into '#'.

export default function maskify(cc) {
  const string = String(cc);
  const strLength = string.length;
  if (strLength <= 4) {
    return string;
  }
  const lastFourDigits = string.slice(-4);
  const hiddenStringArray = new Array(strLength - 4).fill('#');
  return hiddenStringArray.join('') + lastFourDigits;
}
