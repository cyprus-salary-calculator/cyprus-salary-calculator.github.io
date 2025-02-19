document.addEventListener('DOMContentLoaded', function () {
    // Select all input and select elements
    const elements = document.querySelectorAll('input, select:not(#languageSelect)');

    // Attach the calculateNetSalary function to the 'input' event
    elements.forEach(element => {
        element.addEventListener('input', calculateNetSalary);
    });
});


// Formats a number to a string in US locale with exactly 2 decimal places.
function formatNumber(num) {
    return num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Converts a given value to a number. If conversion fails, returns a default value (0 by default).
function toNumber(value, defaultVal = 0) {
    const num = parseFloat(value);
    return isNaN(num) ? defaultVal : num;
}

// Main function to calculate net salary based on various inputs and deductions.
function calculateNetSalary() {
    // Show a loading indicator while processing.
    // document.getElementById('loading').style.display = 'block';

    // Use a timeout to simulate a brief processing delay (500ms).
    setTimeout(() => {
        // Retrieve user inputs from the DOM.
        let salaryType = document.getElementById('salaryType').value;
        let grossSalary = parseFloat(document.getElementById('grossSalary').value);
        let insuranceType = document.getElementById('insuranceType').value;
        let lifeInsurance = toNumber(document.getElementById('lifeInsurance').value);
        let providentFund = toNumber(document.getElementById('providentFund').value);
        let union = toNumber(document.getElementById('union').value);
        let otherDeductions = toNumber(document.getElementById('otherDeductions').value);

        // Convert monthly salary to annual if necessary.
        if (salaryType === 'monthly') {
            grossSalary *= 12;
        }

        // Convert monthly life insurance to annual if necessary.
        if (insuranceType === 'monthly') {
            lifeInsurance *= 12;
        }

        // Calculate the annual provident fund amount as a percentage of gross salary.
        let providentFundAmount = 0.00;
        if (providentFund) {
            providentFundAmount = grossSalary * (providentFund / 100);
        }

        // Calculate the annual union fee amount as a percentage of gross salary.
        let unionAmount = 0.00;
        if (union) {
            unionAmount = grossSalary * (union / 100);
        }

        // Calculate social insurance and Gesy (healthcare) contributions.
        let socialInsurance = grossSalary * 0.088;
        let gesy = grossSalary * 0.0265;

        // Calculate the taxable income by subtracting various deductions.
        // Note: providentFund here is not the computed amount but the input percentage value.
        let taxableIncome = grossSalary - (
            socialInsurance + gesy + lifeInsurance + unionAmount + providentFund + otherDeductions
        );

        // Define the tax brackets with their income ranges and corresponding tax rates.
        let taxBrackets = [
            {min: 0, limit: 19500, rate: 0},
            {min: 19501, limit: 28000, rate: 0.2},
            {min: 28001, limit: 36300, rate: 0.25},
            {min: 36301, limit: 60000, rate: 0.3},
            {min: 60001, limit: Infinity, rate: 0.35}
        ];

        // Initialize total tax and HTML string for the breakdown table.
        let tax = 0;
        let breakdownHTML = "";

        // Loop through each tax bracket to calculate the tax for the portion of income in that bracket.
        for (let bracket of taxBrackets) {
            // Only process if taxable income exceeds the minimum of the bracket.
            if (taxableIncome > bracket.min) {
                // Determine how much of the income falls within this bracket.
                let taxableAmount = Math.min(taxableIncome, bracket.limit) - bracket.min;
                // Calculate the tax for this bracket.
                let taxAmount = taxableAmount * bracket.rate;
                // Add the tax from this bracket to the total tax.
                tax += taxAmount;

                // Append the breakdown information for this bracket as a table row.
                breakdownHTML += `<tr>
                      <td>€${formatNumber(bracket.min)}</td>
                      <td>€${formatNumber(bracket.limit)}</td>
                      <td>${bracket.rate * 100}%</td>
                      <td>€${formatNumber(taxAmount)}</td>
                    </tr>`;
            }
        }

        // Calculate the net salary by subtracting all deductions and tax from the gross salary.
        let netSalary = grossSalary - (socialInsurance + gesy + providentFundAmount + unionAmount + tax);

        // Hide the loading indicator now that processing is complete.
        // document.getElementById('loading').style.display = 'none';

        // Display the results container and the breakdown table.
        document.getElementById('resultsContainer').style.display = 'block';
        document.getElementById('breakdownTable').style.display = 'table';

        // Populate the tax breakdown table with the generated HTML.
        document.getElementById('taxBreakdown').innerHTML = breakdownHTML;

        // Display various annual amounts formatted with the Euro symbol.
        document.getElementById('annualGross').innerText = '€' + formatNumber(grossSalary);
        document.getElementById('annualTaxable').innerText = '€' + formatNumber(taxableIncome);
        document.getElementById('annualTax').innerText = '€' + formatNumber(tax);
        document.getElementById('annualSocialInsurance').innerText = '€' + formatNumber(socialInsurance);
        document.getElementById('annualGesy').innerText = '€' + formatNumber(gesy);
        document.getElementById('annualProvidentFund').innerText = '€' + formatNumber(providentFundAmount);
        document.getElementById('annualUnion').innerText = '€' + formatNumber(unionAmount);
        document.getElementById('annualNet').innerText = '€' + formatNumber(netSalary);

        // Display the monthly amounts by dividing the annual values by 12.
        document.getElementById('monthlyGross').innerText = '€' + formatNumber(grossSalary / 12);
        document.getElementById('monthlyTaxable').innerText = '€' + formatNumber(taxableIncome / 12);
        document.getElementById('monthlyTax').innerText = '€' + formatNumber(tax / 12);
        document.getElementById('monthlySocialInsurance').innerText = '€' + formatNumber(socialInsurance / 12);
        document.getElementById('monthlyGesy').innerText = '€' + formatNumber(gesy / 12);
        document.getElementById('monthlyProvidentFund').innerText = '€' + formatNumber(providentFundAmount / 12);
        document.getElementById('monthlyUnion').innerText = '€' + formatNumber(unionAmount / 12);
        document.getElementById('monthlyNet').innerText = '€' + formatNumber(netSalary / 12);

    }, 500); // End of setTimeout with a delay of 500 milliseconds.
}
