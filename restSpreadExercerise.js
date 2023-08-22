//old code
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  
/* Write an ES2015 Version */


//findMin 

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

//write a function//

function findMin(...args) {
    return Math.min(...args);
}

    console.log(findMin(1,4,12,-3)); //output: -3 
    console.log(findMin(1,-1)); //output: -1
    console.log(findMin(3,1)); //output: 1


//mergeObjects

//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(...objects) { 
    const merged ={}; 
    for(const obj of objects) { 
        for(const key in obi) {
            if (obj.hasOwnProperty(key)) {
                merged[key] = obj[key]; 
            }
        }
    }

    return merged; 
}

    const result = mergeObjects({a: 1, b:2}, {c: 3, d:4}); 
    console.log(result); 

//doubleAndReturnArgs

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]

function doubleAndReturnArgs(arr, ...args) {
    const doubleArgs = args.map(arg => arg *2 ); 
    return [...arr, ...doubleArgs]; 
}

    console.log(doubleAndReturnArgs([1,2,3], 4, 4)); //output: [1,2,3,8,8]
    console.log(doubleAndReturnArgs([2],10,4)); //output: [2,20,8]

//Slice and Dice!

// Remove a random element from the items array and return a new array without that item.
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  };
  
  // Return a new array with every item in array1 and array2.
  const extend = (array1, array2) => [...array1, ...array2];
  
  // Return a new object with all the keys and values from obj and a new key/value pair.
  const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
  
  // Return a new object with a key removed.
  const removeKey = (obj, key) => {
    const { [key]: omitted, ...rest } = obj;
    return rest;
  };
  
  // Combine two objects and return a new object.
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
  
  // Return a new object with a modified key and value.
  const update = (obj, key, val) => ({ ...obj, [key]: val });

