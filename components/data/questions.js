// This file contains the questions and options for the loan application form
export const questions = [
    // Personal Data
    {
        id: "personalData",
        title: "Let's get started",
        placeholder: "Enter your First name",
        inputType: "text",
        placeholder: "Enter your last name",
        inputType: "text",
        nextButton: true,
    },
    // Loan Information
    {
        id: "loanAmount",
        title: "Hi {userName}, how much are you looking to borrow?",
        text: "Borrow up to $100,000 with funding as soon as next day",
        placeholder: "Enter amount",
        options: [
            "$1,000",
            "$2,500",
            "$5,000",
            "$10,000",
            "$25,000",
            "$50,000",
            "$100,000",
            "$200,000",
        ],
        inputType: "number",
        validation: "positiveNumber",
        nextButton: true,

    },
    {
        id: "fundingPurpose",
        title: "Why do you need a loan?",
        text: "Choose the option that best describes your intended use:",
        placeholder: "Select an option",
        inputType: "select",
        options: [
            "Working capital",
            "Equipment purchase",
            "Inventory purchase",
            "Business expansion",
            "Debt consolidation",
            "Marketing and advertising",
            "Other",
        ],
        nextButton: true,
    },
    {
        id: "repaymentTerm",
        title: "What's your annual income before taxes?",
        text: "You can include wage income, bonus, commissions, and all other income Annual income before taxes",
        placeholder: "Enter amount",
        inputType: "number",
        // Add the second part as extra fields:
        subQuestion: {
            title: "How often do you get paid?",
            inputType: "select",
            options: [
                "Weekly",
                "Bi-weekly",
                "Monthly",
                "Other",
            ],
            placeholder: "Select frequency"
        },
        nextButton: true,
    },
    {
        id: "unsecuredDebt",
        title: "How much unsecured debt do you have?",
        text: "Includes credit cards and personal loans. Excludes mortgages and auto-loans",
        placeholder: "Select an amount",
        inputType: "select",
        options: [
            "None",
            "Less than $5,000",
            "$5,000 - $10,000",
            "$10,000 - $25,000",
            "$25,000 - $50,000",
            "More than $50,000"
        ],
        nextButton: true,
    },
    {
        id: "homeAddress",
        title: "What's your home address?",
        text: "Street address",
        placeholder: "Enter your street address",
        inputType: "text",
        text2: "Apt/Suite",
        placeholder2: "Enter your apartment or suite number",
        inputType2: "text",
        text3: "City",
        placeholder3: "Enter your city",
        inputType3: "text",
        text4: "State",
        placeholder4: "Enter your state",
        inputType4: "text",
        text5: "Zip code",
        placeholder5: "Enter your zip code",
        inputType5: "text",
        validation: "usAddress",
        // Add the housing status as a sub-question:
        subQuestion: {
            title: "Do you rent or own your home?",
            inputType: "select",
            options: [
                "I Rent",
                "Own with a mortgage",
                "Own without a mortgage",
            ],
            placeholder: "Select one"
        },
        nextButton: true,
    },
    {
        id: 'profileInfo',
        title: 'Complete your profile information',
        text: 'We need this info to prepare your offers.',
        inputType: 'text',
        placeholder: 'Enter your first name',
        text2: 'Last name',
        placeholder2: 'Enter your last name',
        inputType2: 'text',
        text3: 'Email',
        placeholder3: 'Enter your email address',
        inputType3: 'email',
        text4: 'Phone no.',
        placeholder4: 'Enter your phone number',
        inputType4: 'tel',
        nextButton: true,
    },
    // Additional Information
    {
        id: "creditRating",
        title: "What's your approximate credit rating?",
        text: "Don't worry - our platform has offers for all credit bands.",
        inputType: "select",
        options: [
            "Excellent (750+)",
            "Good (700-749)",
            "Fair (650-699)",
            "Poor (600-649)",
            "Very Poor (<600)",
        ],
        nextButton: true,
    },
    {
        id: "educationEmployment",
        title: "Education and employment information",
        text: "Highest level of education",
        placeholder: "Select an option",
        inputType: "select",
        options: [
            "High School",
            "Some College",
            "Bachelor's Degree",
            "Master's Degree",
            "Doctorate",
        ],
        text2: "Employment status",
        placeholder2: "Select an option",
        inputType2: "select",
        options2: [
            "Employed Full-Time",
            "Employed Part-Time",
            "Unemployed",
            "Student",
            "Retired",
        ],
        nextButton: true,
    },
    {
        id: 'dateOfBirth',
        title: "What's your date of birth?",
        text: "Select your birth date to confirm age eligibility",
        placeholder: "MM/DD/YYYY",
        inputType: "date",
        validation: "usDate",
        nextButton: true,
    },
];