type Replace<
  T extends string,
  U extends string,
  P extends string
> = T extends `${infer F}${U}${infer L}` ? U extends '' ? T : `${F}${P}${L}` : T