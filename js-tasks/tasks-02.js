// Simple tasks (1-4):     =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^=

// 1. Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(' ');

// 2. DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = (dna) => dna.replace(/T/g, 'U');
// mentor-note => try to use newer .replaceAll();

// 3. Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = (list) => Math.min(...list);

const max = (list) => Math.max(...list);

// 4. Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// We already have an arrow function with the same name in task #3, so...
function min(arr, toReturn) {
  return toReturn === 'value'
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// Advanced tasks (not necessary) (5-7):    =^.^= =^.^= =^.^= =^.^= =^.^= =^.^=

// 5. A wolf in sheep's clothing
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

const warnTheSheep = (queue) =>
  queue[queue.length - 1] === 'wolf'
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${queue
        .reverse() // mentor-note => never change the incoming array
        .indexOf('wolf')}! You are about to be eaten by a wolf!`;

// 6. Beginner - Lost Without a Map
// https://www.codewars.com/kata/beginner-lost-without-a-map

const maps = (x) => x.map((x) => x * 2);

// 7. Find the first non-consecutive number
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
  return null;
}

// additional cases ...
const firstNonConsecutive = (arr) => {
  switch (arr.length) {
    case 0:
    case 1:
      return null;
    default:
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) return arr[i];
      }
      return null;
  }
};

// Bonus tasks (some extra) (8-13):    =^.^= =^.^= =^.^= =^.^= =^.^= =^.^= =^.^=

// 8. Double Integer (You Can't Code Under Pressure #1)
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

const doubleInteger = (i) => i * 2;

// 9. Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

// 10. Return n-th even number (Get Nth Even Number)
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

const nthEven = (n) => (n - 1) * 2;

function nthEven(n) {
  return n * 2 - 2;
}

// 11. What's the real floor
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  if (n < 13) {
    return n <= 0 ? n : n - 1;
  }
  return n - 2;
}

// 12. Clock (Beginner Series #2 Clock)
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

const past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;
// mentor-note => try not to use 'Magic Numbers'
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// 13. Is n divisible by x and y
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
