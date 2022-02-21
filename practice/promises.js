// Promises has two arguments resolve and reject. If function executes successfully we can call resolve() else
//  we call reject()
// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("Everything is going well.");
//     } else {
//         reject("Nothing is going well");
//     }
// });

// console.log(countValue);



// var promise = new Promise(function(resolve, reject) {
// const x = "Alliswell";
// const y = "Alliswell";
// if(x === y) {
// 	resolve();
// } else {
// 	reject();
// }
// });

// promise.
// 	then(function () {
// 		console.log('Success');
// 	}).
// 	catch(function () {
// 		console.log('Some error has occurred');
// 	});


// returns a promise

let countValue = new Promise(function (resolve, reject) {
	resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue
	.then(function successValue(result) {
	  console.log(result);
	})
  
	.then(function successValue1() {
	  console.log("You can call multiple functions this way.");
	});


