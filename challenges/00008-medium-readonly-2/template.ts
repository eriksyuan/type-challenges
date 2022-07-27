type MyReadonly2<T, P extends keyof T = keyof T> = {
    readonly [K in P]: T[K]
}
    & {
        [K in keyof T as K extends P ? never : K]: T[K]
    }