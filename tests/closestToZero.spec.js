const closestToZero = require("../src/closestToZero");

describe("ClosestToZero: returns the closest value to 0", () => {
  it("[8, 5, 10] => 5", () => {
    expect(closestToZero([8, 5, 10])).toBe(5);
  });
  it("[5, 4, -9, 6, -10, -1, 8] => -1", () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
  });

  it("[-3,1,3] => 1", () => {
    expect(closestToZero([-3, 1, 3])).toBe(1);
  });
  it("[-2,0,1,2] => 0", () => {
    expect(closestToZero([-2, 0, 1, 2])).toBe(0);
  });
  it("[2,0] => 0", () => {
    expect(closestToZero([2, 0])).toBe(0);
  });
  it("[1] => 1 (array  with one element)", () => {
    expect(closestToZero([1])).toBe(1);
  });
  it("[-4,-5,-3] => -3 (negative elements)", () => {
    expect(closestToZero([-4, -5, -3])).toBe(-3);
  });
  it("[8,11,2] => 2 (positive elements)", () => {
    expect(closestToZero([8, 11, 2])).toBe(2);
  });
  it("[-1,-2,-3,0,5] => 0 (array with 0)", () => {
    expect(closestToZero([-1, -2, -3, 0, 5])).toBe(0);
  });
  it("[8, 2, 3, -2] => 2 (returns the positive one if the closest number in input is either negative or positive)", () => {
    expect(closestToZero([8, 2, 3, -2])).toBe(2);
  });
  it("returns 0 if input is undefined or empty", () => {
    expect(closestToZero([])).toBe(0);
    expect(closestToZero()).toBe(0);
  });
  it("throws an error if the input is not an array", () => {
    expect(() => {
      closestToZero("heoo");
    }).toThrow(TypeError);
  });
  it("throws an error if the input has  other elements than nunmers", () => {
    expect(() => {
      closestToZero([1, 2, "heoo"]);
    }).toThrow(TypeError);
  });
});
