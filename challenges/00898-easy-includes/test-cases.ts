type MyEqual<T, U> = (<X>() => X extends T ? 1 : 0) extends <X>() => X extends U
  ? 1
  : 0
  ? true
  : false;

// ? why wrong
// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;
// todo shixian

type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Rest]
  ? MyEqual<X, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

//   ! important