const checkMidpoint = require("./binarysearch");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
test("should return dummy ", () => {
  expect(1).toBe(1);
});

test("should return middleIndex number ", () => {
  expect(checkMidpoint(5, array)).toBe(5);
});
