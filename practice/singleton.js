// let counter = 0;

// class Counter {
//   getInstance() {
//     return this;
//   }

//   getCount() {
//     return counter;
//   }

//   increment() {
//     return ++counter;
//   }

//   decrement() {
//     return --counter;
//   }
// }

// const counter1 = new Counter();
// const counter2 = new Counter();

// console.log(counter1.getInstance() === counter2.getInstance()); // false

var Singleton = (function () {
  var instance;

  function createInstance() {
      var object = new Object("I am the instance");
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();

function run() {

  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log("Same instance? " + (instance1 === instance2));
}
