type space = ' ' | '\n' | '\t'
type TrimLeft<T extends string> = T extends `${space}${infer R}` ? TrimLeft<R> : T


