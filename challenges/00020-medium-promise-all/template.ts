// todo mark
declare function PromiseAll<V extends any[] = []>(v: readonly [...V]): Promise<{
  [P in keyof V]: V[P] extends Promise<infer R> ? R : V[P]
}>
