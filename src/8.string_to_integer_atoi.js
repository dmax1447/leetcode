// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

const isDigit = (char) => /\d/.test(char)
var myAtoi = function(s) {
  let result = 0
  const max = 2 ** 31 - 1

  let str = s.trim()
  const signs = ['-', '+']
  const hasLeadSign = signs.includes(str.charAt(0))
  let isNegative = false
  if (hasLeadSign) {
    isNegative = str.charAt(0) === '-'
    str = str.slice(1, str.length)
  }
  let i = 0
  let numSubst = ''
  while (isDigit(str[i]) && i < str.length) {
    numSubst += str[i++]
  }

  if (numSubst.length === 0) return 0
  const num = parseInt(numSubst, 10)
  if (!isNegative) {
    return num <= max ? num : max
  } else {
    return num <= max +1 ? -num : -max-1
  }
};
const s0 = '42'
const s1 = "   -42"
const s2 = 'ddfdsf32'
const s3 = '4193 with 2 words'
const s4 = 'words and 987'
const s5 = '-91283472332'
myAtoi(s5) //?

