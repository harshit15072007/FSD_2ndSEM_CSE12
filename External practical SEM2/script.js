function calculateResult() {

    let subjects = parseInt(prompt("Enter the number of subjects:"));

    let total = 0;

    for (let i = 1; i <= subjects; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i + ":"));
        total += marks;
    }

    let average = total / subjects;

    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let resultStatus;

    if (average >= 40) {
        resultStatus = "Pass";
    }
    else {
        resultStatus = "Fail";
    }

    document.getElementById("result").innerHTML =
        "<p>Total Marks: " + total + "</p>" +
        "<p>Average Marks: " + average.toFixed(2) + "</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Result: " + resultStatus + "</p>";
}