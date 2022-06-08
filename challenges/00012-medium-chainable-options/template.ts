type Chainable<T extends {} = {}> = {
  option<K extends string, V extends any>(
    // 传如相同的参数会报错
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [P in K]: V }>;
  get(): T;
};
