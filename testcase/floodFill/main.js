/**
 * Flood Fill
 *
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 * You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
 * Replace the color of all of the aforementioned pixels with color.
 * Return the modified image after performing the flood fill.
 *
 * Example1.
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
 * Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
 *
 * Example2.
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
 * Output: [[0,0,0],[0,0,0]]
 * Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 *
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

export const floodFill = function (image, sr, sc, color) {
    const result = [...image];
    const value = result[sr][sc];

    if (value === color) return result;

    const rowLength = result.length;
    const columnLength = result[0].length;
    const verifyList = { [`${sr}-${sc}`]: true };
    result[sr][sc] = color;

    const findTarget = (row, column) => {
        const isExisted = verifyList[`${row}-${column}`];
        if (isExisted) return;

        const outOfRange = row < 0 || column < 0 || row > rowLength - 1 || column > columnLength;
        if (outOfRange) return;

        const notSame = result[row][column] !== value;
        if (notSame) return;

        verifyList[`${row}-${column}`] = true;
        result[row][column] = color;

        findTarget(row - 1, column);
        findTarget(row + 1, column);
        findTarget(row, column - 1);
        findTarget(row, column + 1);
    };
    findTarget(sr - 1, sc);
    findTarget(sr + 1, sc);
    findTarget(sr, sc - 1);
    findTarget(sr, sc + 1);

    return result;
};

// floodFill(
//     [
//         [1, 1, 1],
//         [1, 1, 0],
//         [1, 0, 1]
//     ],
//     1,
//     1,
//     2
// );
