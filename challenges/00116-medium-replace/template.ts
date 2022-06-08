type Replace<
  T extends string,
  U extends string,
  P extends string
> = T extends `${infer first}${U}${infer latest}`
  ? U extends ""
    ? T
    : `${first}${P}${latest}`
  : T;
