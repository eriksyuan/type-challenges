type space = " " | "\n" | "\t";


// * 通过``来处理字符串  类似于数组...
type TrimLeft<S extends string> = S extends `${space}${infer R}`
  ? TrimLeft<R>
  : S;


  