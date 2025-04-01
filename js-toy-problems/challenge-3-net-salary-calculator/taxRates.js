// taxRates.js
// Constants and helper functions for salary calculations

const TAX_BRACKETS = [
    { upTo: 24000, rate: 0.1 },
    { upTo: 32333, rate: 0.25 },
    { upTo: Infinity, rate: 0.3 }
];

const NHIF_RATES = [
    { upTo: 5999, amount: 150 },
    { upTo: 7999, amount: 300 },
    { upTo: 11999, amount: 400 },
    { upTo: 14999, amount: 500 },
    { upTo: 19999, amount: 600 },
    { upTo: 24999, amount: 750 },
    { upTo: 29999, amount: 850 },
    { upTo: 34999, amount: 900 },
    { upTo: 39999, amount: 950 },
    { upTo: 44999, amount: 1000 },
    { upTo: 49999, amount: 1100 },
    { upTo: 59999, amount: 1200 },
    { upTo: 69999, amount: 1300 },
    { upTo: 79999, amount: 1400 },
    { upTo: 89999, amount: 1500 },
    { upTo: 99999, amount: 1600 },
    { upTo: Infinity, amount: 1700 },
];

function calculateTax(income) {
    let tax = 0;
    let remaining = income;
    let lastBracket = 0;

    for (let i = 0; i < TAX_BRACKETS.length; i++) {
        const bracket = TAX_BRACKETS[i];
        const taxable = Math.min(remaining, bracket.upTo - lastBracket);
        tax += taxable * bracket.rate;
        remaining -= taxable;
        lastBracket = bracket.upTo;
        if (remaining <= 0) break;
    }

    return tax;
}

function calculateNHIF(gross) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (gross <= NHIF_RATES[i].upTo) return NHIF_RATES[i].amount;
    }
    return 1700;
}

function calculateNSSF(gross) {
    return Math.min(0.06 * gross, 1080); // tier 1 + tier 2 combined
}

module.exports = {
    calculateTax,
    calculateNHIF,
    calculateNSSF
};
