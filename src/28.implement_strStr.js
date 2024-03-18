// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1
  if (haystack === needle) return 0

  for(let i = 0; i + needle.length <= haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0) && haystack.substring(i, i + needle.length) === needle) return i
  }
  return -1
};




// const h0 = "sadbutsad"
// const n0 = "sad"
// strStr(h0, n0) //?
//
// const h1 = "leetcode"
// const n1 = "leeto"
// strStr(h1, n1) //?
//
// const h2 = 'aaaaa'
// const n2 = 'bba'
// strStr(h2, n2) //?
//
// const h3 = "mississippi"
// const n3 = "issip"
// strStr(h3, n3) //?
//
// const h4 = "a"
// const n4 = "a"
// strStr(h4, n4) //?
//
// const h5 = "aaa"
// const n5 = "aaa"
// strStr(h5, n5) //?
//
// const h6 = "aaa"
// const n6 = "aaaa"
// strStr(h6, n6) //?

const h7 = "abc"
const n7 = "c"
strStr(h7, n7) //?


