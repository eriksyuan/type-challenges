type getComputedType<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never;
};

declare function SimpleVue<D, C, M>(options: {
  data: (this: void) => D;
  computed: C & ThisType<D>;
  methods: M & ThisType<D & M & getComputedType<C>>;
}): any;
