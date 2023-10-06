let WeightKg = Number(prompt("Enter weight in kilograms"));
let HeightCm = Number(prompt("Enter height in centimeters"));
function calcBMI(WeightKg, HeightCm) {
    return ((WeightKg / (WeightKg * HeightCm)) * 10000);
}

function BMIrange() {
    if (BMI < 18.5){
        return ("underweight");
    } else if (BMI < 25){
        return ("healthy");
    } else if (BMI < 30){
        return ("overweight");
    } else {
        return ("obese");
    }
}

const BMI =
calcBMI(WeightKg, HeightCm);
const range = BMIrange(WeightKg, HeightCm);

console.log("User BMI " + BMI);
console.log("User BMI range " + range);