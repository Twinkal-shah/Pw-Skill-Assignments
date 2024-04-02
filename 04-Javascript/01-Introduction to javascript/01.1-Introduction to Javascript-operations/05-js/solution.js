// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Ensure the rate is in decimal form (e.g., 5% becomes 0.05)
    let rateInDecimal = rate / 100;

    // Calculate simple interest
    let simpleInterest = (principal * rateInDecimal * time) / 100;

    return simpleInterest;
}

// Example values
let principalAmount = 1000;
let annualInterestRate = 5;
let investmentTime = 2;

// Calculate simple interest using the function
let interest = calculateSimpleInterest(principalAmount, annualInterestRate, investmentTime);

// Display the result
console.log("Principal Amount: $" + principalAmount);
console.log("Annual Interest Rate: " + annualInterestRate + "%");
console.log("Investment Time: " + investmentTime + " years");
console.log("Simple Interest: $" + interest.toFixed(2));