import { parseObjToNumber } from './main.js';
import { obj } from './main.config.js';
test.each(parseObjToNumber(obj))('Parse object to number array', num => {
    expect(num).toEqual(expect.any(Number));
});
