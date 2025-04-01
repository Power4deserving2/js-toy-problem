// cylinderVolume.js
// Calculates the volume of a cylinder using object-oriented JavaScript

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4); // return with 4 decimal places
    }
}

// Example usage:
const prompt = require('prompt-sync')();
const r = parseFloat(prompt("Enter radius: "));
const h = parseFloat(prompt("Enter height: "));

const cylinder = new Cylinder(r, h);
console.log("Volume of cylinder:", cylinder.getVolume());
