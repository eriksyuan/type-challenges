
type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [P in T[number]]:P
}

// arr[number] 用 number关键字来访问数组的索引
// * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html