const num1 = 1;
const num2 = 25;


console.log(`Ascending number from ${num1} to ${num2} are:`);
for(let start = num1; start <= num2; start++){
    console.log(start);
}

console.log("\n");

console.log(`Descending number from ${num2} to ${num1} are:`);
for(let start = num2; start >= num1; start--){
    console.log(start);
}