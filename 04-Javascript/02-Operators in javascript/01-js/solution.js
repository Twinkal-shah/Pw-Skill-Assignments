/*
The ternary operator in JavaScript is a concise way to write simple conditional statements. It's also known as the conditional operator. The syntax of the ternary operator is as follows:

condition ? expr1 : expr2

- condition: An expression that evaluates to either true or false.
- expr1: The value to be returned if the condition is true.
- expr2: The value to be returned if the condition is false.

The ternary operator is a shorthand way of writing an if-else statement. If the condition is true, expr1 is evaluated and returned; otherwise, expr2 is evaluated and returned.
*/

// Example:-

const number = 10;

number%2==0 ? console.log(`${number} is EVEN`) : console.log(`${number} is ODD`);