// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    // Calculate the area using the formula
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example radius value
let radius = 10; // Replace with your radius value

// Calculate the area using the function
let circleArea = calculateCircleArea(radius);

// Display the result
console.log("Radius: " + radius);
console.log("Area of the Circle: " + circleArea.toFixed(2));