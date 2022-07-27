type Equal<T, U> = (<X>() => X extends T ? 1 : 2) extends <X>() => X extends U
  ? 1
  : 2
  ? true
  : false;

type Includes<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;
