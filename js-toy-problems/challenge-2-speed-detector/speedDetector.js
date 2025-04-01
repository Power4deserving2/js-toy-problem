// speedDetector.js
// This program calculates demerit points based on car speed.

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit) {
        return "Ok";
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (points > 12) {
        return "License suspended";
    }

    return `Points: ${points}`;
}

// Example usage:
const prompt = require('prompt-sync')();
const speed = parseInt(prompt("Enter car speed: "), 10);
console.log(checkSpeed(speed));
