type MyReturnType<T extends (...args: any[]) => unknown> = T extends (
  ...args: any[]
) => infer Return
  ? Return
  : never;
