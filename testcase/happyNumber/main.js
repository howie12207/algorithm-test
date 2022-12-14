/**
 * 編寫一個算法來確定一個數字 n 是否為快樂數字。
 * 快樂數字是由以下過程定義的數字：
 * 從任何正整數開始，將數字替換為其數字的平方和。
 * 重複這個過程，直到數字等於 1（它將保持不變），或者它在不包括 1的循環中無限循環。
 * 這個過程以 1 結束的那些數字是快樂的。
 * 如果是快樂數字回傳 true 否則回 false。
 *
 * n 的範圍是 1 <= n <= 2^31 - 1
 *
 * Eample n = 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 * Eample n = 2
 * Output: false
 *
 * @param {number} n
 * @return {boolean}
 */

export const isHappy = n => {
    let s = String(n);
    const list = {};
    let isValid = false;
    let result = 0;

    const computing = () => {
        const length = s.length;
        for (let i = 0; i < length; i++) {
            result += Number(s[i]) ** 2;
        }

        if (result === 1) return (isValid = true);
        if (list[result]) return (isValid = false);

        list[result] = true;
        s = String(result);
        result = 0;
        computing();
    };
    computing();

    return isValid;
};
