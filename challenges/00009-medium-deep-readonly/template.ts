// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Function
//     ? T[P]
//     : T[P] extends any[]
//     ? [T[P][number] extends ]
//     : T[P];
// };

// type normal = number | string | undefined | null | Function | symbol | boolean;

// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends normal
//     ? T[P]
//     : DeepReadonly<T[P]>;
// };




type DeepReadonly<T> = T extends Function
  ? T
  : T extends object
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T;