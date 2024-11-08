function calclulateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    

if (!weight || !height){
    document.getElementById('result').textContent = "Please enter the weight and height";
    return;
}
 const bmi = weight / height ** 2;
 let category;

 if (bmi < 18.5)
    {
    category = 'Underweight';
 } 
 else if(bmi >=18.5 && bmi <= 24.9)
 {
    category = 'Normal weight';
 } 
 else if(bmi >= 25 && bmi <=29.9)
 {
    category = 'Overweight';
 } 
 else if(bmi >=30 && bmi< 35)
 {
    category = 'Obesity'
 } 
 else if(bmi >= 35)
 {
    category = 'Severe Obesity'
 }

 document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} - ${category}`;

 setTimeout (() => {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
 }, 1000);
 
}

