/** Object型をマージする */
// Note: マージするとoptional指定が外れる
export type Merge<F extends object, S extends object> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never
}

/** Usage */
// type A = {
//   a: string
//   b?: string
// }
// type B = {
//   a: string
//   c: string
// }

// type X = Merge<A, B>
// {
//   a: string
//   b: string
//   c: string
// }