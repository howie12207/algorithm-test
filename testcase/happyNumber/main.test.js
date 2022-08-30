import { isHappy } from './main.js';

test('Is 2 a happy number?', () => {
    expect(isHappy(2)).toBe(false);
});
test('Is 19 a happy number?', () => {
    expect(isHappy(19)).toBe(true);
});
test('Is 1934400033914900032 a happy number?', () => {
    expect(isHappy(1934400033914900032)).toBe(true);
});
test('Is 19000389098914900032 a happy number?', () => {
    expect(isHappy(19000389098914900032)).toBe(false);
});
