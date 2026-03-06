What is the difference between var, let, and const?
<!-- --------------------------------------------------- -->
var: Var are accessible globally. They can be redeclared and updated, which often leads to errors. Now we its not use generally because of let.
let: Variables are restricted to the specific {} block where they are defined. They can be updated but not redeclared in the same scope.
const: Variables are block-scoped and cannot be reassigned or redeclared. If a const variable holds an object or array, its properties can still be modified
=====================================

What is the spread operator (...)?
<!-- ------------------------------ -->
The spread operator `...` in JavaScript lets you expand an array or object into individual elements or properties. Think of it like taking everything out of a box and spreading it out on the table.
★const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5] ★ spreads 1,2,3 and adds 4,5
console.log(newNumbers);  output [1, 2, 3, 4, 5]
=====================================

What is the difference between map(), filter(), and forEach()?
<!-- -------------------------------------------------------------- -->
★forEach()    just do something for each item
It doesn’t return anything. I can use it when I want to perform an action, like logging or updating something.
const numbers = [1, 2, 3]
numbers.forEach(num => console.log(num * 2))
Output: 2, 4, 6

★map()   transform each item and get a new array
It returns a new array of the same length.
Use it when you want to change each element.
const numbers = [1, 2, 3]
const dd = numbers.map(num => num * 2);
console.log(dd); output- [2, 4, 6]

★filter()    pick items that match a condition
It returns a new array, usually smaller.
Use it when you want to keep only certain items.
const numbers = [1, 2, 3, 4, 5]
const even = numbers.filter(num => num % 2 === 0)
console.log(even) ★ [2, 4]
===================================== 

What is an arrow function?
<!-- -------------------------- -->
Arrow functions are always expression and must be assigne to a variable. They cannot be used before they are defined.
★ Arrow Function const add = (a, b) => a + b
=====================================

What are template literals?
<!-- ------------------------------ -->
Template literals in JavaScript are a way to create string that can include variable, expression, and multi-line text easily
const nme = "A K Biplob";
const ak = `My Name Is ${nme}!`;
console.log(ak); ★ My Name Is A K Biplob!
