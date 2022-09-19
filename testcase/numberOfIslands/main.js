/**
 * Number of Islands
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example1:
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 * Example2:
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 * @param {character[][]} grid
 * @return {number}
 */

export const numIslands = function (grid) {
    const list = {};
    const rowCount = grid.length;
    const colCount = grid[0].length;
    let result = 0;

    const checkAround = (i, j) => {
        const outOfRange = i < 0 || i >= rowCount || j < 0 || j >= colCount;
        if (outOfRange) return;
        if (list[`${i},${j}`]) return;

        list[`${i},${j}`] = grid[i][j];

        if (grid[i][j] === '1') {
            checkAround(i, j + 1);
            checkAround(i, j - 1);
            checkAround(i + 1, j);
            checkAround(i - 1, j);
        }
    };

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (list[`${i},${j}`]) continue;
            list[`${i},${j}`] = grid[i][j];
            if (grid[i][j] === '1') {
                result++;
                checkAround(i, j + 1);
                checkAround(i, j - 1);
                checkAround(i + 1, j);
                checkAround(i - 1, j);
            }
        }
    }

    return result;
};
