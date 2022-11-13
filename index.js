// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  const firstTwo = [...arr.slice(0, 2)];
  return firstTwo;
};

const returnLastTwoDrivers = (arr) => {
  const lastTwo = [...arr.slice(arr.length - 2)];
  return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
  return function (fare) {
    return fare * num;
  };
};

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

const selectDifferentDrivers = (arr, func) => {
  return func(arr);
};
