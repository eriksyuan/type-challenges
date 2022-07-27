type LookUp<T extends { type: any }, K extends string> = T extends { type: K } ? T : never

// ?https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
// type LookUp<T extends { type: any }, K extends string> = T extends any ? T['type'] extends K ? T : never :never

