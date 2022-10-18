/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const db = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  s = s.split("");
  let answ = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && s[i] < s[i + 1]) {
      answ = db[s[i + 1]] - db[s[i]] + answ;
      i++
    } else {
        answ += db[s[i]]
    }
  }
  return answ
};

console.log(romanToInt("LVIII"));
