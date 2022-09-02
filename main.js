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
    const list = {};

    // 將位置/值 塞入表單
    image.forEach((item, index) => {
        item.forEach((value, key) => {
            list[`${index}.${key}`] = value;
        });
    });

    // 找出與起始點相同值的位置
    const needValue = list[`${sr}.${sc}`];
    const filterList = [];
    Object.entries(list).forEach(([key, value]) => {
        if (value === needValue) filterList.push(key);
    });

    // 判斷是否臨近
    const x = sr;
    const y = sc;
    const checkList = [`${x - 1}.${y}`, `${x + 1}.${y}`, `${x}.${y - 1}`, `${x}.${y + 1}`];
    const resultList = [`${sr}.${sc}`];
    const checkIsNear = () => {
        const temp = filterList.find(
            item => checkList.includes(item) && !resultList.includes(item)
        );
        if (temp) {
            resultList.push(temp);
            checkIsNear();
        }
    };
    checkIsNear();

    // 替換
    let array = [...image];
    resultList.forEach(item => {
        const [x, y] = item.split('.');
        array[y][x] = color;
    });

    return array;
};

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1]
        ],
        1,
        1,
        2
    )
);
