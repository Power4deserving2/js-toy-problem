// gradeGenerator.js
// This program takes student marks and returns the corresponding grade.

function generateGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid marks. Please enter a number between 0 and 100.";
    } else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

// Example usage:
const prompt = require('prompt-sync')();
const marks = parseInt(prompt("Enter student marks (0 - 100): "), 10);
console.log(generateGrade(marks));
