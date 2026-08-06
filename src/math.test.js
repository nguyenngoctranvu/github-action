const { add, subtract, multiply } = require("./math");

test("add adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply multiplies two numbers", () => {
  expect(multiply(4, 3)).toBe(12);
});
