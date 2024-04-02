// Simple tasks (1-3):     =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^=

// 1. Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}

// 2. Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

// 3. Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

const giveMeFive = (obj) => {
  const result = [];
  for (key in obj) { // mentor-note => always put 'const'
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
};

// Advanced tasks (not necessary) (4-5):    =^.^= =^.^= =^.^= =^.^= =^.^= =^.^=

// 4. Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

const buildFun = (n) => {
  let result = []; // mentor-note => find a better variable name than 'result'

  for (let i = 0; i < n; i++) {
    result.push(() => i);
  }
  return result;
};

// 5. Fun with ES6 Classes #2 - Animals and Inheritance
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
