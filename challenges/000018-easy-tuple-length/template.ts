// type Length<T extends Readonly<any[]>> = T['length']

type Length<T extends readonly any[]> = T['length']
