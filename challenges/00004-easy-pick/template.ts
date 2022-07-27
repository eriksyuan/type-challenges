// type MyPick<T, P extends keyof T> = {
//   [K in keyof T as K extends P ? K : never]: T[K]
// }


type MyPick<T, P extends keyof T> = {
  [K in P]: T[K]
}
