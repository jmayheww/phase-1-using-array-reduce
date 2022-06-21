// const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// "we'll learn how to use the reduce() iterator method to aggregate a result, i.e., to reduce a list to a single value. That value can be a string, a number, a boolean, etc

// const products = [
//     {name: 'Shampoo', price: 4.99 },
//     {name: 'Donuts', price:7.99 },
//     {name: 'Cookies', price: 6.49 },
//     {name: 'Bath Gel', price: 13.99 }
// ];

// // we want to  aggregate the price with a new function, getTotalAmountForProducts

// function getTotalAmountForProducts(products) {

//     let totalPrice = 0;

//     for (const product of products) {
//         totalPrice += product.price;
//     };
//     return totalPrice;
// }

// console.log(getTotalAmountForProducts(products));


// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];

//   function ourReduce(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {
//         accum = reducer(accum, element);
//     };
//         return accum;
//   }

//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }

//   console.log(ourReduce(couponLocations, couponCounter, 0));

//   // use .reduce to return primative return value

//   const doubleAndSummed = [1, 2, 3].reduce(function (accumulator, element){
//     return element * 2 + accumulator
//   }, 0);

//   doubleAndSummed;
//   console.log('doubleAndSummed: ', doubleAndSummed);

//   //using reduce() with an Object as the Return Value

//   const letters = ['a', 'b', 'c', 'b', 'a', 'a'];

//   const lettersCount = letters.reduce(function(countObj, currentLetter){
//         if (currentLetter in countObj) {
//             countObj[currentLetter]++;
//         }else {
//             countObj[currentLetter] = 1;
//         }
//         return countObj;

//         },
//         {});
// console.log(lettersCount);

// const showcases = {
//     "Dance": [],
//     "Visual": [],
//     "Music": [],
//     "Theater": [],
//     "Writing": []
//   }

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(accumulator, number){
    return number + accumulator;
}, 0);

console.log(totalBatteries);