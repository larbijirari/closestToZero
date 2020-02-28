/**
 * finds the closest value to 0
 * @param {Array} values input
 * @returns {number} result
 */
const closestToZero = (values = []) => {
  //check the type of input
  if (!Array.isArray(values)) {
    throw new TypeError(`The given input is not an Array`);
  }

  //handle the case where the input is Empty or undefined
  if (values.length === 0) {
    return 0;
  }

  let result = values.reduce((prev, curr) => {
    if (typeof curr !== "number") {
      throw new TypeError(`Unsupported type expected Number`);
    }
    return Math.abs(curr) < Math.abs(prev) ? curr : prev;
  });

  //handle the case if the closest value to 0 exist in negative and positive, i.e. [4,3,-2,8,2]=>2
  return values.indexOf(Math.abs(result)) > 0 ? Math.abs(result) : result;
};

module.exports = closestToZero;
