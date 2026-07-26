# `@lucid-softworks/is-iterable`

Check for a callable `Symbol.iterator` method and narrow values to
`Iterable<unknown>`. Strings, arrays, sets, maps, generators, and custom
iterables are supported.

```ts
import { isIterable } from "@lucid-softworks/is-iterable";

const value: unknown = new Set(["a", "b"]);
if (isIterable(value)) {
  [...value];
}
```
