// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
var longestCommonPrefix = function(strs) {
  let prefixStack = strs[0].split('')
  strs.forEach(word => {
    let i = 0
    while (i < word.length && i < prefixStack.length && word[i] === prefixStack[i]) i++
    prefixStack.length = i
  })

  return prefixStack.join('')
};

const strs1 = ["flower","flow","flight"]
const strs2 = ["dog","racecar","car"]

longestCommonPrefix(strs2) //?
