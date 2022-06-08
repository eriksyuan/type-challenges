
type Trim<T extends string> = TrimLeft<T> extends `${infer str}${space}`
  ? Trim<str>
  : TrimLeft<T>;
