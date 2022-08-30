/**
 * Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * @param {string[]} strs
 * @return {string}
 */

// Solution1
export const longestCommonPrefix = function (strs) {
    /**
     * 取每個第一個字元比較
     * 相同再比較第二個
     */
    const length = strs.length;
    if (length === 1) return strs[0];

    const len = strs[0].length;
    let result = '';
    let tmp = '';
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < length; j++) {
            if (j === 0) tmp = strs[j][i];
            else if (tmp !== strs[j][i]) return result;
            else if (j === length - 1) result += tmp;
        }
    }
    return result;
};
