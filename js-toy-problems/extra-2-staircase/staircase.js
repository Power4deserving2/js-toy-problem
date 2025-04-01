// staircase.js
// Builds a staircase pattern of # based on a given number of steps.

function steps(n) {
    for (let row = 1; row <= n; row++) {
        let step = '';
        for (let col = 1; col <= row; col++) {
            step += '#';
        }
        console.log(step);
    }
}

// Example usage:
const prompt = require('prompt-sync')();
const levels = parseInt(prompt("Enter number of steps: "), 10);
steps(levels);
