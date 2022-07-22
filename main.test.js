import { parseObjToNumber } from "./main.js";

test.each(
    parseObjToNumber({
        apple: 1,
        banana: {
            a: 2,
            b: [{ c: 3, d: 4 }],
        },
        cat: {
            e: 5,
            f: [6, 7],
            g: { j: "test", h: 8, i: 9 },
            k: false,
        },
        dog: true,
        eat: {
            p: {
                q: {
                    r: {
                        s: 10,
                        t: [11, 12],
                    },
                },
                u: "v",
            },
        },
    })
)("Parse object to number array", (num) => {
    expect(num).toEqual(expect.any(Number));
});
