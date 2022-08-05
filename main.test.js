import { isIsomorphic } from './main.js';

test('Check answer', () => {
    expect(isIsomorphic('ass', 'egg')).toBe(true);
});
test('Check answer', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
});
test('Check answer', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
});
test('Check answer', () => {
    expect(isIsomorphic('badc', 'baba')).toBe(false);
});
test('Check answer', () => {
    expect(isIsomorphic('abca', 'bavb')).toBe(true);
});
