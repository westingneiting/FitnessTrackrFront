

// REVIEW


// Array.map()
// some parameters available when using map
  // callback
    // index
    // elements within the array / aka current value(element)
// array.map(callback)
// array.map((element, index) => {
//   console.log(element)
//   console.log(index)
//   return element;
// })

const nameArray = ['Jason', 'Krystin', 'Gyno', 'Kevin', 'Andrew'];

const mappedNames = nameArray.map((name) => {
  console.log(name)
  return name + 's';
})

console.log('mappedNames: ', mappedNames)
console.log('original Name array: ', nameArray)

// Using the map method in context of a react component
// const NameComponent = () => {
//   return (
//     {
//       nameArray.map((name, index) => {
//         console.log(name);
//         return <p key={index}>name + 's'</p>
//       })
//     }
//   )
// }



// Array.filter()
// takes callback function returns new array containing elements returned from the callback
  // callback: function to determine what elements will be returned and which will not.
  
  
  // useful where
  const filteredNameArray = nameArray.filter((name) => name !== 'Jason');
  
  console.log('FILTERED Names: ', filteredNameArray);

// CRUD = 
// Create
// Read
// Update
// Delete


// When and where do we use { } and ( ) ?

// when do we use { } curly braces?
// functions
  function funcName() {
    // funcName code block
  }
  
  const funcTwo = () => {
    // funcTwo code block
  }
  
  // arrow functions sometimes require curly braces and sometimes not
  // when do we need curly braces in an arrow function?
    // we need them when we need to do multiple steps of opperations
    const multiStepFunction = () => {
      console.log('something');
      return 'something';
    }
    
    // we DO NOT need them when doing ONE opperation
    const singleStepFunc = () => console.log('something');
    
    const returnNumberFour = () => 4;

  singleStepFunc();
  console.log(returnNumberFour());
  

// We need curly braces for...
// for loops
// while loops
// if, else, and else if statements
// declaring objects { }


// sometimes we don't need curly braces for 'if' statements
// if (true) return true;
// if (nameArray.length === 5) return 'name array has 5 elements';



// when do we use parentheses ( ) ?
// functions 
  // declaring functions - parentheses contain the parameter list
  // invoking functions - parentheses contain the argument list
  
  // always need parentheses when using the 'function' keyword
  
  
  // we don't always need them for arrow functions
  // whenever there's just one parameter/argument we DO NOT need parentheses
  nameArray.map(name => console.log('hello ' + name + '!'))



// Destructuring
// extracting parts of an object / array

// destructuring from an OBJECT
const object = {
  name: 'Jason',
  age: 35,
  height: 6.3,
  eyeColor: 'brown',
  array: [1,2,3,4,5]
}

const {name, age, height, eyeColor, array} = object;

console.log(name, age, height, eyeColor)
console.log('array from the object ', array)

const [num1, num2, num3] = array;

console.log(num1, num3)

// destructuring from an array
const colorsArray = ['red', 'blue', 'white', 'green', 'orange', 'purple'];

const [colorRed, blue, white, green, thisIsTheColorOrange] = colorsArray;

console.log('color: ', colorRed)
console.log('color: ', thisIsTheColorOrange)


