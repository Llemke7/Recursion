/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  const currentLength = words[0].length;
  const maxLength = longest(words.slice(1));
  return Math.max(currentLength, maxLength);

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] === val) {
    return 0;
  }
  const foundIndex = findIndex(arr.slice(1), val);
  return foundIndex === -1 ? -1 : foundIndex + 1;

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return str;
  }
  return revString(str.slice(1)) + str[0];

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) {
    return -1;
  }
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr.slice(0, mid), val);
  }
  const result = binarySearch(arr.slice(mid + 1), val);
  return result === -1 ? -1 : mid + 1 + result;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
