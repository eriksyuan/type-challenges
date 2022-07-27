// TODO    K = T
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends any
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
