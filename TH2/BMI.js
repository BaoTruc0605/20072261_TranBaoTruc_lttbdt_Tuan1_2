function calculateBMI() {
    // var massMark = 78
    // let heightMark = 1.69
    // var massJohn = 92
    // let heightJohn = 1.95
    var massMark = parseInt(document.getElementById("massMark").value)
    let heightMark = parseFloat(document.getElementById("heightMark").value)
    var massJohn = parseInt(document.getElementById("massJohn").value)
    let heightJohn = parseFloat(document.getElementById("heightJohn").value)
    let bmiMark = (massMark / (heightMark * heightMark) ).toFixed(2)
    let bmiJohn = (massJohn / (heightJohn * heightJohn) ).toFixed(2)
    
    document.getElementById('BMIMark').value = bmiMark;
    document.getElementById('BMIJohn').value = bmiJohn;
    
    markHigherBMI = bmiMark > bmiJohn;
    document.getElementById('result').value = markHigherBMI;
    if(markHigherBMI)
        console.log("Mark's BMI is higher than John's!")
    else
        console.log("John's BMI is higher than Mark's!")

}