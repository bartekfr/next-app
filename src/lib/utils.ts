export type MakeNullable<T> = {
  [P in keyof T]: T[P] | null;
};