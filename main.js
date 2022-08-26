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

export const longestPalindrome = function (str) {
    const record = {};
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        if (!record[str[i]]) {
            record[str[i]] = 1;
        } else {
            record[str[i]] = 0;
            len += 2;
        }
    }
    if (str.length > len) {
        len++;
    }
    return len;
};
