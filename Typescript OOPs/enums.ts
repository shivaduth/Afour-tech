

// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// console.log(Direction.Down);


// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }

// console.log(Direction.Down);


// String enums

// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT",
// }

// console.log(Direction.Right);

// Heterogeneous enums

// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
// }
// console.log(BooleanLikeHeterogeneousEnum.No);
// console.log(BooleanLikeHeterogeneousEnum.Yes);


// Enums during runtime

// enum E{
//     X,
//     Y,
//     Z,
// }
   
// function f(obj: { Y: number }) {
//     return obj.Y;
// }
   
//   // Works, since 'E' has a property named 'X' which is a number.
// console.log(f(E));


// Enums at compile time

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
   
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
   
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("ERROR", "This is a message");