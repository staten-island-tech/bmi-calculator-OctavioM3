function calcBMI (WeightKg, HeightCm) {
    if (WeightKg <= 0 || HeightCm <= 0) {
        return "Invalid input. Weight and height must be positive numbers.";
    }

    const BMI = (WeightKg / HeightCm **2) * 703;
    return BMI;
}
let WeightKg = Number(prompt("Enter weight in kilograms"));
let HeightCm = Number(prompt("Enter height in centimeters"));
console.log(calcBMI)