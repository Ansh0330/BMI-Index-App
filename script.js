const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const btn = document.querySelector("#calc-btn");

btn.addEventListener('click',()=>{
    const heightVal = parseInt(heightInput.value);
    const weightVal = parseInt(weightInput.value);
    const result = document.querySelector('#result')
    if(heightVal === '' || heightVal <= 0 || isNaN(heightVal)) {
        result.innerHTML = `Please enter the valid height`;
        result.classList.add('result');
    } else if(weightVal === '' || weightVal <= 0 || isNaN(weightVal)){
        result.innerHTML = `Please enter the valid weight`
        
    }else{
        let bmi = (weightVal / ((heightVal**2)/10000)).toFixed(2);
        result.innerHTML = `Your BMI : ${bmi}`;
        result.classList.add('result');
        const desc = document.querySelector('#bmi-desc');
        if(bmi<18.6) {
            desc.innerHTML = `You are Underweight.`;
            desc.classList.add('underweight');
        }
        else if (bmi<24.9) {
            desc.innerHTML = `Your Bmi is in Normal Range.`
            desc.classList.add('normal');
        }
        else {
            desc.innerHTML = `You are Overweight.`;
            desc.classList.add('overweight');
        }
    }
})

