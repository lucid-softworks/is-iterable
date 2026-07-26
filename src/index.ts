/** Returns whether `value` implements the synchronous iterable protocol. */
export function isIterable(value: unknown): value is Iterable<unknown> {
  if (
    value === null ||
    (typeof value !== "object" &&
      typeof value !== "function" &&
      typeof value !== "string")
  ) {
    return false;
  }

  return typeof Reflect.get(Object(value), Symbol.iterator) === "function";
}
