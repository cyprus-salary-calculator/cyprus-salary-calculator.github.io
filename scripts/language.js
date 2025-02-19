// salary.js

const translations = {
    en: {
        mainTitle: "Cyprus Net Salary Calculator",
        grossSalaryLabel: "Gross Salary",
        lifeInsuranceLabel: "Life Insurance Premium",
        providentFundLabel: "Provident Fund",
        unionLabel: "Union",
        otherDeductionsLabel: "Other Tax Deductions",
        calculateButton: "Calculate Net Salary",
        // Table translations
        annuallyLabel: "Annually",
        monthlyLabel: "Monthly",
        grossLabel: "Gross",
        taxableLabel: "Taxable Income",
        taxLabel: "Tax",
        socialInsuranceLabel: "Social Insurance",
        gesyLabel: "General Healthcare System (GHS)",
        netLabel: "Net",
        howItWorksTitle: "How It Works",
        explanationIntro:
            "This calculator helps you determine your net salary in Cyprus by deducting Social Insurance, the General Healthcare System (GHS), income tax, and any other optional or mandatory contributions from your gross salary.",

        grossSalaryTitle: "Gross Salary",
        grossSalaryText: "Your total salary before any deductions. You can enter it monthly or yearly.",

        lifeInsuranceTitle: "Life Insurance Premium",
        lifeInsuranceText: "The amount you pay for a life insurance policy. Some or all of this may be tax-deductible (depending on the legal limits). Enter it monthly or yearly.",
        providentFundTitle: "Provident Fund",
        providentFundText: "A retirement or savings plan (often employer-sponsored). The contribution is typically a percentage of your gross salary and may reduce your taxable income.",

        unionTitle: "Union",
        unionText: "If you belong to a professional union or association, you might pay a percentage of your salary as union fees. These fees can sometimes be deducted from your taxable income.",
        otherDeductionsTitle: "Other Tax Deductions",
        otherDeductionsText: "Any additional deductible expenses or allowances you can legally claim (e.g., charitable donations, specific social contributions, etc.). Enter the annual total here if applicable.",
        socialInsuranceTitle: "Social Insurance & GHS",
        socialInsuranceText: "Mandatory contributions in Cyprus. The calculator deducts these amounts from your gross salary before calculating taxable income.",
        taxableIncomeTitle: "Taxable Income",
        taxableIncomeText: "Taxable Income is calculated as: Gross Salary - (Social Insurance + GHS + Life Insurance + Provident Fund + Union Fees + Other Deductions). The exact deductibility of each item may depend on current Cyprus tax laws.",
        netSalaryTitle: "Net Salary Calculation",
        netSalaryText: "Once the taxable income is determined, the calculator applies the Cyprus tax brackets to calculate your income tax. Your net salary is then: Gross Salary - (All Contributions + Tax). The result is your take-home pay, shown with both monthly and annual breakdowns."

    },
    gr: {
        mainTitle: "Υπολογιστής Καθαρού Μισθού Κύπρου",
        grossSalaryLabel: "Μικτός Μισθός",
        lifeInsuranceLabel: "Ασφάλεια Ζωής",
        providentFundLabel: "Ταμείο Προνοίας",
        unionLabel: "Συντεχνία",
        otherDeductionsLabel: "Άλλες Φορολογικές Εκπτώσεις",
        calculateButton: "Υπολογίστε Καθαρό Μισθό",
        // Table translations
        grossLabel: "Μικτός",
        taxableLabel: "Φορολογητέο Εισόδημα",
        taxLabel: "Φόρος",
        socialInsuranceLabel: "Κοινωνικές Ασφαλίσεις ",
        gesyLabel: "Γενικό Σύστημα Υγείας (ΓΕΣΥ)",
        netLabel: "Καθαρός Μισθός",
        annuallyLabel: "Ετήσια",
        monthlyLabel: "Μηνιαία",
        howItWorksTitle: "Πώς Λειτουργεί",
        explanationIntro: "Αυτός ο υπολογιστής σας βοηθά να προσδιορίσετε τον καθαρό σας μισθό στην Κύπρο, αφαιρώντας τις Κοινωνικές Ασφαλίσεις, το Γενικό Σύστημα Υγείας (ΓΕΣΥ), τον φόρο εισοδήματος, καθώς και τυχόν άλλες προαιρετικές ή υποχρεωτικές εισφορές από τον μικτό σας μισθό.",
        grossSalaryTitle: "Μικτός Μισθός",
        grossSalaryText: "Το συνολικό ποσό του μισθού πριν από οποιεσδήποτε κρατήσεις. Μπορείτε να το εισάγετε είτε μηνιαία είτε ετήσια.",
        lifeInsuranceTitle: "Ασφάλεια Ζωής",
        lifeInsuranceText: "Το ποσό που πληρώνετε για ένα συμβόλαιο ασφάλισης ζωής. Μέρος ή ολόκληρο αυτό το ποσό μπορεί να εκπίπτει από τη φορολογία (ανάλογα με τα νόμιμα όρια). Εισάγετέ το σε μηνιαία ή ετήσια βάση.",
        providentFundTitle: "Ταμείο Αποταμίευσης/Προνοίας",
        providentFundText: "Ένα συνταξιοδοτικό ή αποταμιευτικό σχέδιο (συχνά χορηγούμενο από τον εργοδότη). Η εισφορά συνήθως είναι ένα ποσοστό του μικτού μισθού και μπορεί να μειώσει το φορολογητέο εισόδημα.",
        unionTitle: "Συντεχνία",
        unionText: "Αν ανήκετε σε κάποιο επαγγελματικό σωματείο ή ένωση (Συντεχνία), ενδέχεται να πληρώνετε ένα ποσοστό του μισθού σας ως συνδρομή. Αυτές οι συνδρομές μπορούν σε ορισμένες περιπτώσεις να εκπίπτουν από το φορολογητέο εισόδημα.",
        otherDeductionsTitle: "Άλλες Φορολογικές Εκπτώσεις",
        otherDeductionsText: "Οποιαδήποτε επιπρόσθετη έκπτωση ή επίδομα που μπορείτε νόμιμα να διεκδικήσετε (π.χ. φιλανθρωπικές δωρεές, συγκεκριμένες κοινωνικές εισφορές κ.λπ.). Εισάγετε εδώ το ετήσιο σύνολο, εάν υπάρχει.",
        socialInsuranceTitle: "Κοινωνικές Ασφαλίσεις & ΓΕΣΥ",
        socialInsuranceText: "Υποχρεωτικές εισφορές στην Κύπρο. Ο υπολογιστής αφαιρεί αυτά τα ποσά από τον μικτό μισθό πριν υπολογίσει το φορολογητέο εισόδημα.",
        taxableIncomeTitle: "Φορολογητέο Εισόδημα",
        taxableIncomeText: "Το Φορολογητέο Εισόδημα υπολογίζεται ως: Μικτός Μισθός - (Κοινωνικές Ασφαλίσεις + ΓΕΣΥ + Ασφάλεια Ζωής + Ταμείο Αποταμίευσης + Συνδικαλισμός + Άλλες Εκπτώσεις). Το ακριβές ποσό κάθε έκπτωσης εξαρτάται από την εκάστοτε κυπριακή νομοθεσία.",
        netSalaryTitle: "Υπολογισμός Καθαρού Μισθού",
        netSalaryText: "Αφού προσδιοριστεί το φορολογητέο εισόδημα, ο υπολογιστής εφαρμόζει τις κυπριακές φορολογικές κλίμακες για να υπολογίσει τον φόρο εισοδήματος. Ο καθαρός μισθός σας προκύπτει ως: Μικτός Μισθός - (Όλες οι Εισφορές + Φόρος). Το αποτέλεσμα είναι ο μισθός που λαμβάνετε, εμφανιζόμενο με μηνιαία και ετήσια ανάλυση."

    }
};

function changeLanguage(lang) {
    // Optionally update the document's language attribute
    document.documentElement.lang = lang;

    Object.keys(translations[lang]).forEach(key => {
        document.querySelectorAll(`#${key}, .${key}`).forEach(el => {
            el.innerText = translations[lang][key];
        });
    });

    // Store the selected language in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the stored language or default to 'en'
    const defaultLang = localStorage.getItem('preferredLanguage') || 'en';

    document.getElementById('languageSelect').value = defaultLang;
    changeLanguage(defaultLang);
});
