/**
 * Longest Palindrome
 *
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Example
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length is 1.
 *
 * @param {string} s
 * @return {number}
 */

// Solution 1
// export const longestPalindrome = function (str) {
//     const length = str.length;
//     // 計算各個字元出現次數
//     const obj = {};
//     for (let i = 0; i < length; i++) {
//         if (!obj[str[i]]) obj[str[i]] = 1;
//         else obj[str[i]] += 1;
//     }
//     let result = 0;
//     let odd = 0;
//     // 取2的倍數 數量
//     Object.values(obj).forEach(item => {
//         if (odd === 0 && item % 2 !== 0) {
//             odd = 1;
//         }
//         if (item >= 2) {
//             result += Math.floor(item / 2);
//         }
//     });
//     return result * 2 + odd;
// };

// Solution2
export const longestPalindrome = function (str) {
    const length = str.length;
    const obj = {};
    let result = 0;
    for (let i = 0; i < length; i++) {
        if (!obj[str[i]]) obj[str[i]] = true;
        else {
            delete obj[str[i]];
            result += 2;
        }
    }
    return Object.keys(obj).length > 0 ? result + 1 : result;
};
