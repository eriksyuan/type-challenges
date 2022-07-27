type AppendArgument<F extends (...args: any[]) => unknown, T> = F extends (
  ...args: infer A
) => infer R
  ? (...arg0: [...A, T]) => R
  : never;
