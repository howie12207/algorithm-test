import { obj } from './main.config.js';
/**
 * 請將物件展開回傳包含所有數字的陣列
 * @return {number[]}
 */
export const parseObjToNumber = data => {
    const result = [];
    const expand = obj => {
        Object.values(obj).forEach(item => {
            if (typeof item === 'number') result.push(item);
            else if (typeof item === 'object') expand(item);
        });
    };
    expand(data);

    return result;
};

console.log(parseObjToNumber(obj));
