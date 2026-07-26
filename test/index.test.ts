import { describe, expect, it } from "vitest";

import { isIterable } from "../src/index.js";

describe("isIterable", () => {
  it.each([
    [[], true],
    [new Set(), true],
    ["value", true],
    [
      Object.assign(() => undefined, { [Symbol.iterator]: function* () {} }),
      true,
    ],
    [{ [Symbol.iterator]: 42 }, false],
    [{}, false],
    [null, false],
    [42, false],
  ])("checks a value", (value, expected) => {
    expect(isIterable(value)).toBe(expected);
  });
});
