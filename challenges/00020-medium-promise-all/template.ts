declare function PromiseAll<T extends any[] = []>(
  // * [...T]
  values: readonly [...T]
): Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P];
}>;