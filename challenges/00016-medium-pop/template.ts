type Pop<T extends any[]> = T extends [...infer rest, infer last]
  ? rest
  : never;
