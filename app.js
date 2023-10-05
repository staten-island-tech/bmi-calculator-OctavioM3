let WeightKg = Number(prompt("Enter weight in kilograms"));
let HeightCm = Number(prompt("Enter height in centimeters"));
function calcBMI (WeightKg, HeightCm) {
    const BMI = ((WeightKg / (WeightKg * HeightCm)) * 703);
    return BMI;
}
console.log(BMI)

const User = {
    firstName: "",
    WeightKg: 80,
    HeightCm: 240,
};
console.log();
