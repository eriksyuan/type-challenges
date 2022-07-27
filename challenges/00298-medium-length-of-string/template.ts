// 1.将字符串转为数组
// 2.返回数组的length
type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer str}${infer Rest}`
  ? LengthOfString<Rest, [...T, str]>
  : T["length"];
