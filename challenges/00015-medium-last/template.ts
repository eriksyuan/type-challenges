// type Last<T extends any[]> = T extends [...infer rest, infer last]
//   ? last
//   : never;

type Last<T extends any[]> = T extends [infer first, ...infer rest]
  ? rest["length"] extends 1
    ? rest[0]
    : Last<rest>
  : never;
