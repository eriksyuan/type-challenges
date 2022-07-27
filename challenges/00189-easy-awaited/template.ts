type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer S> ? S extends Promise<unknown> ? MyAwaited<S> : S : T
