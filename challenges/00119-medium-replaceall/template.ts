type ReplaceAll<
  T extends string,
  R extends string,
  V extends string
> = R extends ""
  ? T
  : T extends `${infer F}${R}${infer L}`
  ? `${F}${V}${ReplaceAll<L, R, V>}`
  : T;
