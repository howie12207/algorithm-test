/**
 * Contest-01
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 *Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export const twoSum = function (nums, target) {
    const table = {};
    for (let i = 0; i < nums.length; i++) {
        const less = target - nums[i];
        if (table[less] !== undefined) {
            return [table[less], i];
        } else {
            table[nums[i]] = i;
        }
    }
};

/**
 * Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the i^th day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 *
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 *
 * @param {number[]} prices
 * @return {number}
 */

export const maxProfit = function (prices) {
    let compare = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];
        if (prices[i] - min > compare) compare = prices[i] - min;
    }
    return compare;
};
