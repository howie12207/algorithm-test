import { floodFill } from './main.js';

test('T1 - Check answer', () => {
    expect(
        floodFill(
            [
                [0, 0, 0],
                [0, 1, 0]
            ],
            1,
            1,
            2
        )
    ).toEqual([
        [0, 0, 0],
        [0, 2, 0]
    ]);
});
test('T1 - Check answer', () => {
    expect(
        floodFill(
            [
                [0, 0, 0],
                [0, 0, 0]
            ],
            0,
            0,
            0
        )
    ).toEqual([
        [0, 0, 0],
        [0, 0, 0]
    ]);
});
test('T1 - Check answer', () => {
    expect(
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
    ).toEqual([
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1]
    ]);
});
