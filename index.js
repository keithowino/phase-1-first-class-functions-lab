// Code your solution in this file!

// TODO:- Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
// TODO:- The assigned function should take one argument, an array containing the names of Scuber's drivers.
const returnFirstTwoDrivers = function (namesArr){
  // TODO:- Return a new array containing the first two drivers in the array.
  return namesArr.slice(0, 2);
};

// ----------------------------------------

// TODO:- Declare a variable with const that is assigned an anonymous function.
// TODO:- The assigned function should take one argument, an array containing the names of Scuber's drivers.
const returnLastTwoDrivers = function (namesArr){
  // TODO:- Return a new array containing the last two drivers in the array.
  return namesArr.slice(-2);
};

// ----------------------------------------

// TODO:- This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// ----------------------------------------

//  TODO:- Takes in one argument.
const createFareMultiplier = function (int){
  // TODO:- Returns a function that will multiply a fare for a ride accordingly.
  return (fare) => int * fare;
};

// ----------------------------------------

const fareDoubler = createFareMultiplier(2);

// ----------------------------------------

const fareTripler = createFareMultiplier(3);

// ----------------------------------------

// TODO:- Takes two arguments.
function selectDifferentDrivers(namesArr, driversToReturn){
  // TODO:- Based on these two arguments, our f will return either the first two drivers or the last two drivers.
  return driversToReturn(namesArr);
};