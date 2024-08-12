console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)
function calculateArea (length,width){
return length * width
}

// Call the `calculateArea` function with any two values. Console log the result to check it.

let result = calculateArea(2,4)
console.log("The area of this is:" , result)

// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.
 let student = {
  name:"laila" ,
  grade:95,
  class:"Science"
  }
function checkPassing (student){
return student.grade >= 63
}
let isPassing= checkPassing(student);
 console.log("Is the student pasing", isPassing)

// Define a `student` object that has name (string), class (string), and grade (number) attributes.

  let student2 = {
  name:"layy" ,
  grade:85,
  class:"english"
  }

// Call the `checkPassing` function with the `student` object. Console log the result to check it.

let isPassing2= checkPassing(student2);
 console.log("Is the student pasing", isPassing2)

// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters and console logs the element at that index of the array.
function printIndex (array,index){
  if (index >= 0 && index < array.length){
    console.log(`The element at index ${index} is: ${array[index]}`);
  } else {
    console.log("Index not unavalible");
  }
}
// Pink & Blue: Define `printIndex` as an ARROW function

// Define an array called `favoriteFoods` and put at least 3 elements in
  
let favoriteFoods = ["Rice","Plantins","Chicken"];

// Call the `printIndex` function with `favoriteFoods` and any index

printIndex(favoriteFoods,0);







  

// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes



// Define an array called `numbers` and put at least 3 numbers in


// Call the `calculateTotal` function with `numbers` and any index

  