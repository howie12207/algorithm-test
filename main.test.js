import { longestCommonPrefix } from './main.js';

test('Check answer', () => {
    expect(longestCommonPrefix(['a'])).toBe('a');
});
test('Check answer', () => {
    expect(longestCommonPrefix(['aa', 'ab'])).toBe('a');
});
test('Check answer', () => {
    expect(longestCommonPrefix(['cir', 'car'])).toBe('c');
});
test('Check answer', () => {
    expect(longestCommonPrefix(['nobody', 'nobodyknow'])).toBe('nobody');
});
test('Check answer', () => {
    expect(longestCommonPrefix(['howie', 'ehowie'])).toBe('');
});
test('Check answer', () => {
    expect(longestCommonPrefix(['reflower', 'flow', 'flight'])).toBe('');
});
