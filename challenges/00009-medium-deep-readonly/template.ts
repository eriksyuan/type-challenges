// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Function
//     ? T[P]
//     : T[P] extends any[]
//     ? [T[P][number] extends ]
//     : T[P];
// };


type normal = number | string | undefined | null | Function | symbol | boolean;


type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends normal ? T[K] : DeepReadonly<T[K]>
}