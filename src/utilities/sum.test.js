import sum from "./sum";

describe("sum", () => {
  test("sum is called with no arguments", () => {
    expect(sum()).toBe(0);
  });

  test.each([10, 50, 1500])(
    "sum is called with one argument",
    (sumArgument) => {
      expect(sum(sumArgument)).toBe(sumArgument);
    }
  );

  test.each([null, undefined, NaN, 0])(
    "falsy arguments are ignored",
    (sumArgument) => {
      expect(sum(sumArgument)).toBe(0);
    }
  );

  test.each([
    {
      input: [10, 20, 30],
      expected: 60,
    },
    {
      input: [NaN, undefined, 10, 15, 0],
      expected: 25,
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null],
      expected: 55,
    },
  ])("sum is called with multiple arguments", ({ input, expected }) => {
    expect(sum(...input)).toBe(expected);
  });
});
