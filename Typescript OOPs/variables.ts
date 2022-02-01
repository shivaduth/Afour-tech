// function f() {
//     var a = 10;
//     return function g() {
//       var b = a + 1;
//       return b;
//     };
//   }
//   var g = f();
//   console.log(g()); // returns '11'



// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//       var x = 10;
//     }
//     return x;
//   }
//   console.log(f(true)); // returns '10'
//   console.log(f(false)); // returns 'undefined'


// function theCityThatAlwaysSleeps() {
//     let getCity;
//     if (true) {
//       let city = "Seattle";
//       getCity = function () {
//         return city;
//       };
//     }
//     return getCity();
//   }
// console.log(theCityThatAlwaysSleeps());


// Array Destructing


// let input = [1, 2];
// let [first, second] = input;
// console.log(first); // outputs 1
// console.log(second); // outputs 2

// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
//   }
//   f([1, 2]);


//  Tuple destructuring

// let tuple: [number, string, boolean] = [7, "hello", true];
// let [a, b, c] = tuple; // a: number, b: string, c: boolean
// console.log(b);


// Spread


let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5]; //  Spreading creates a shallow copy of first and second. They are not changed by the spread.
console.log(bothPlus);