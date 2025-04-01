// bubbleSort.js
// Sorts an array of numbers from lowest to highest using Bubble Sort.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const input = [5, 6, 1, 3, 4, 2];
console.log("Original:", input);
console.log("Sorted:", bubbleSort(input));
