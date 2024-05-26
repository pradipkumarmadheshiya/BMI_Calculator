const p=document.createElement("p")

function calculateBMI(){

    const inputWeight=document.getElementById("weight")
    const inputHeight=document.getElementById("height")
    const button= document.getElementsByTagName("button")
    const calculator=document.getElementById("calculator")

    const weight=inputWeight.value
    const height=inputHeight.value

    let bmi=weight/(height**2)
    bmi=bmi.toFixed(2)
    
    if (bmi<18.5){
        p.textContent=`Your BMI is ${bmi}. You are Underweight.`
    }
    else if (bmi>=18.5 && bmi<=25){
        p.textContent=`Your BMI is ${bmi}. You are Normal.`
    }
    else if (bmi>25 && bmi<30){
        p.textContent=`Your BMI is ${bmi}. You are Overweight.`
    }
    else if (bmi>30){
        p.textContent=`Your BMI is ${bmi}. You are Obesity.`
    }

    calculator.append(p)
}