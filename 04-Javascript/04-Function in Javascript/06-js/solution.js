function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
function add(x, y) {
    return x + y;
}

let curriedAdd = curry(add);

// Test with individual arguments
console.log(curriedAdd(2)(3)); // Expected output: 5

// Test with all arguments at once
console.log(curriedAdd(2, 3)); // Expected output: 5