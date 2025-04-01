// salaryCalculator.js
// Program to calculate net salary based on basic salary and benefits

const prompt = require('prompt-sync')();
const { calculateTax, calculateNHIF, calculateNSSF } = require('./taxRates');

const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const grossSalary = basicSalary + benefits;
const tax = calculateTax(grossSalary);
const nhif = calculateNHIF(grossSalary);
const nssf = calculateNSSF(grossSalary);

const netSalary = grossSalary - tax - nhif - nssf;

console.log("Gross Salary:", grossSalary.toFixed(2));
console.log("PAYE (Tax):", tax.toFixed(2));
console.log("NHIF Deduction:", nhif.toFixed(2));
console.log("NSSF Deduction:", nssf.toFixed(2));
console.log("Net Salary:", netSalary.toFixed(2));
