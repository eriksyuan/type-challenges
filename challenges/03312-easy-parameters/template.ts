type MyParameters<P extends (...args: any[]) => unknown> = P extends (
  ...args: infer P
) => unknown
  ? [...P]
  : never;
