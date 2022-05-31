// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P];
// } & {
//   [P in keyof T as P extends K ? never : P]: P extends K ? never : T[P];
// };

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P];
// } & Pick<T, Exclude<keyof T, K>>;



type MyReadonly2<T, K extends keyof T = keyof T> = 
Readonly<Pick<T,K>>
& Pick<T, Exclude<keyof T, K>>;