/** オブジェクトをフィルタリングする */
// Doc: https://zenn.dev/sanbasan/articles/98be4ecd96db57
export const filterProperties = <T extends object>(
  obj: T,
  filterFn: (key: string, value: unknown) => boolean,
): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => filterFn(key, value)),
  ) as Partial<T>;
};

/** オブジェクトの undefined の値を消す */
// Doc: https://zenn.dev/sanbasan/articles/98be4ecd96db57
export const filterUndefinedProperties = <T extends object>(
  obj: T,
): Partial<T> => filterProperties(obj, (_key, value) => value !== undefined);

// Usage
// const x = {
//   a: "hoge",
//   b: undefined,
//   c : {
//       x: undefined
//   }
// }
// const y = filterUndefinedProperties(x)
// console.log(y)
// => {
//   "a": "hoge",
//   "c": {
//     "x": undefined
//   }
// }