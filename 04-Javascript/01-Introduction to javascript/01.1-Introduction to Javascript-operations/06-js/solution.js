// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height to meters
    let heightInMeters = height / 100;

    // Calculate BMI
    let bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
}

// Example values
let weightInKg = 70;
let heightInCm = 175;

// Calculate BMI using the function
let bmiResult = calculateBMI(weightInKg, heightInCm);

// Display the result
console.log("Weight: " + weightInKg + " kg");
console.log("Height: " + heightInCm + " cm");
console.log("BMI: " + bmiResult.toFixed(2));