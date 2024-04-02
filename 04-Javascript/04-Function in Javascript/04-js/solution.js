function calculateTax() {
    // Define tax rates based on income ranges using a closure
    const taxRates = {
        lowIncome: 0.1,   // 10% tax rate for low income
        mediumIncome: 0.2, // 20% tax rate for medium income
        highIncome: 0.3    // 30% tax rate for high income
    };

    // Return a function that calculates tax based on income
    return function(income) {
        if (income <= 10000) {
            return income * taxRates.lowIncome;
        } else if (income > 10000 && income <= 50000) {
            return income * taxRates.mediumIncome;
        } else {
            return income * taxRates.highIncome;
        }
    };
}

// Example usage
let calculateTaxForIncome = calculateTax();

// Test with various incomes
let income1 = 8000;   // Low income
let tax1 = calculateTaxForIncome(income1);
console.log(`Tax for income $${income1}: $${tax1}`);

let income2 = 25000;  // Medium income
let tax2 = calculateTaxForIncome(income2);
console.log(`Tax for income $${income2}: $${tax2}`);

let income3 = 75000;  // High income
let tax3 = calculateTaxForIncome(income3);
console.log(`Tax for income $${income3}: $${tax3}`);