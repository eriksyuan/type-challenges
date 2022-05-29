type MyReadonly<T> = {
  readonly [P in keyof T]:  T[P]
}


// * readonly 关键字
// ? https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const