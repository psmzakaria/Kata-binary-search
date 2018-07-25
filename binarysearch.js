const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkMidpoint = (number, array) => {
  const middleIndex = Math.floor((array.length - 1) / 2);
  if (number === array[middleIndex]) return number;
  if ((number = !array[middleIndex])) {
    const slicedArray = array.slice(0, middleIndex);
    return slicedArray;
    //   } else {
    //     const slicedArray = array.slice(middleIndex, array.length);
    //     return slicedArray;
  }
};

module.exports = checkMidpoint;
