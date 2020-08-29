export const flatten = (arr: Array<Array<string>>) =>
    arr.reduce((acc, cur) => [...acc, ...cur], [])