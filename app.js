

let WeightKg = Number(prompt("Enter weight in kilograms"));
let HeightCm = Number(prompt("Enter height in centimeters"));
let Name = (prompt("Enter Name"));

function calcBMI(WeightKg, HeightCm) {
    return ((WeightKg / (WeightKg * HeightCm)) * 10000);
}

function BMIrange() {
    if (BMI < 18.5){
        return ("underweight");
    } else if (BMI < 25){
        return ("healthy");
    } else if (BMI < 30){
        return ("unhealthy");
    } else {
        return ("dangerous");
    }
}

const BMI =
calcBMI(WeightKg, HeightCm);
const range = BMIrange(WeightKg, HeightCm);

function argument(user) {
    console.log(`User Name ${user}`);
}
argument(Name)

console.log("User BMI " + BMI);
console.log("User BMI range " + range);