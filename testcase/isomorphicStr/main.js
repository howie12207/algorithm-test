/**
 * Isomorphic Strings
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 * Example1:
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example2:
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example3:
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution1
// export const isIsomorphic = function (s, t) {
//     const length = s.length;
//     const list = {};

//     for (let i = 0; i < length; i++) {
//         if (!list[s[i]]) list[s[i]] = t[i];
//         else if (list[s[i]] !== t[i]) return false;
//     }

//     const ary = Object.values(list);
//     return new Set(ary).size === ary.length;
// };

// Solution2
export const isIsomorphic = function (s, t) {
    const length = s.length;
    const list1 = {};
    const list2 = {};

    for (let i = 0; i < length; i++) {
        if (!list1[s[i]]) list1[s[i]] = t[i];
        else if (list1[s[i]] !== t[i]) return false;

        if (!list2[t[i]]) list2[t[i]] = s[i];
        else if (list2[t[i]] !== s[i]) return false;
    }
    return true;
};
