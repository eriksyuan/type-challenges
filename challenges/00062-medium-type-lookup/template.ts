type LookUp<T extends { type: any }, U> = T extends { type: U } ? T : never;
