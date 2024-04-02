Conditional statements in JavaScript are used to make decisions in code by executing different blocks of code based on whether a specified condition evaluates to true or false. These statements help control the flow of a program and allow it to respond to different situations.

There are primarily three types of conditional statements in JavaScript:

1. **if statement:**
   The `if` statement is used to execute a block of code if a specified condition is true.

   ```javascript
   if (condition) {
     // Code to be executed if the condition is true
   }
   ```

   Example:

   ```javascript
   let x = 10;

   if (x > 5) {
     console.log("x is greater than 5");
   }
   ```

2. **if-else statement:**
   The `if-else` statement is used to execute one block of code if a specified condition is true and another block of code if the condition is false.

   ```javascript
   if (condition) {
     // Code to be executed if the condition is true
   } else {
     // Code to be executed if the condition is false
   }
   ```

   Example:

   ```javascript
   let y = 3;

   if (y % 2 === 0) {
     console.log("y is even");
   } else {
     console.log("y is odd");
   }
   ```

3. **if-else if-else statement:**
   The `if-else if-else` statement is an extension of the `if-else` statement, allowing you to check multiple conditions in a sequence.

   ```javascript
   if (condition1) {
     // Code to be executed if condition1 is true
   } else if (condition2) {
     // Code to be executed if condition2 is true
   } else {
     // Code to be executed if none of the conditions is true
   }
   ```

   Example:

   ```javascript
   let grade = 75;

   if (grade >= 90) {
     console.log("A");
   } else if (grade >= 80) {
     console.log("B");
   } else if (grade >= 70) {
     console.log("C");
   } else {
     console.log("F");
   }
   ```

These conditional statements are fundamental for building logic and controlling the flow of your JavaScript programs. Depending on the conditions, different code blocks will be executed, allowing for flexible and dynamic behavior in your applications.