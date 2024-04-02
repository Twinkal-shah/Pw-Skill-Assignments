In JavaScript, operators are categorized based on the number of operands they operate on. Here's a differentiation between unary, binary, and ternary operators along with examples for each:

1. **Unary Operators:**
   - **Description:** Unary operators operate on a single operand.
   - **Example:**
     ```javascript
     let x = 5;

     // Unary minus (negation)
     let negation = -x; // Result: -5

     // Unary plus (no effect in this case)
     let positive = +x; // Result: 5

     // Logical NOT
     let isNotTrue = !true; // Result: false
     ```

2. **Binary Operators:**
   - **Description:** Binary operators operate on two operands.
   - **Example:**
     ```javascript
     let a = 5;
     let b = 3;

     // Addition
     let sum = a + b; // Result: 8

     // Multiplication
     let product = a * b; // Result: 15

     // Logical AND
     let isBothTrue = true && false; // Result: false
     ```

3. **Ternary Operator:**
   - **Description:** The ternary operator is the only operator in JavaScript that takes three operands. It provides a concise way to write a simple conditional expression.
   - **Syntax:**
     ```javascript
     condition ? expr1 : expr2
     ```
   - **Example:**
     ```javascript
     let age = 20;

     // Ternary operator to check if age is greater than or equal to 18
     let isAdult = age >= 18 ? "Yes" : "No"; // Result: "Yes"
     ```

In the ternary operator example, if the condition (`age >= 18`) is true, the expression evaluates to `"Yes"`, otherwise, it evaluates to `"No"`. This is a concise way to express a simple conditional statement.

Understanding these distinctions is important for reading and writing JavaScript code. Unary, binary, and ternary operators are fundamental to performing various operations and creating expressive and efficient code.