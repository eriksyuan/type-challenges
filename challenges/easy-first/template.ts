// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// type First<T extends any[]> = T extends [] ? never : T[0];

// type First<T extends any[]> = T[number] extends never ? never : T[0];


type First<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never;



// infer 类型推断
// * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html