// Currency exchange rates (demo purposes only - in real app, fetch from API)
const exchangeRates = {
  USD: {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 148.23,
    AUD: 1.52,
    CAD: 1.36,
    CHF: 0.88,
    CNY: 7.18,
    SEK: 10.67,
    NZD: 1.66,
  },
  EUR: {
    USD: 1.09,
    EUR: 1,
    GBP: 0.86,
    JPY: 161.42,
    AUD: 1.65,
    CAD: 1.48,
    CHF: 0.96,
    CNY: 7.83,
    SEK: 11.62,
    NZD: 1.81,
  },
  GBP: {
    USD: 1.27,
    EUR: 1.16,
    GBP: 1,
    JPY: 187.62,
    AUD: 1.92,
    CAD: 1.72,
    CHF: 1.11,
    CNY: 9.08,
    SEK: 13.49,
    NZD: 2.1,
  },
  JPY: {
    USD: 0.0067,
    EUR: 0.0062,
    GBP: 0.0053,
    JPY: 1,
    AUD: 0.01,
    CAD: 0.0092,
    CHF: 0.0059,
    CNY: 0.048,
    SEK: 0.072,
    NZD: 0.011,
  },
  AUD: {
    USD: 0.66,
    EUR: 0.61,
    GBP: 0.52,
    JPY: 97.77,
    AUD: 1,
    CAD: 0.89,
    CHF: 0.58,
    CNY: 4.72,
    SEK: 7.01,
    NZD: 1.09,
  },
  CAD: {
    USD: 0.74,
    EUR: 0.68,
    GBP: 0.58,
    JPY: 108.99,
    AUD: 1.12,
    CAD: 1,
    CHF: 0.65,
    CNY: 5.28,
    SEK: 7.84,
    NZD: 1.22,
  },
  CHF: {
    USD: 1.14,
    EUR: 1.04,
    GBP: 0.9,
    JPY: 168.95,
    AUD: 1.73,
    CAD: 1.54,
    CHF: 1,
    CNY: 8.16,
    SEK: 12.11,
    NZD: 1.89,
  },
  CNY: {
    USD: 0.14,
    EUR: 0.13,
    GBP: 0.11,
    JPY: 20.69,
    AUD: 0.21,
    CAD: 0.19,
    CHF: 0.12,
    CNY: 1,
    SEK: 1.48,
    NZD: 0.23,
  },
  SEK: {
    USD: 0.094,
    EUR: 0.086,
    GBP: 0.074,
    JPY: 13.92,
    AUD: 0.14,
    CAD: 0.13,
    CHF: 0.083,
    CNY: 0.68,
    SEK: 1,
    NZD: 0.16,
  },
  NZD: {
    USD: 0.6,
    EUR: 0.55,
    GBP: 0.48,
    JPY: 89.32,
    AUD: 0.92,
    CAD: 0.82,
    CHF: 0.53,
    CNY: 4.35,
    SEK: 6.45,
    NZD: 1,
    INR: 82.5,
  },
  INR: {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0096,
    JPY: 1.81,
    AUD: 0.018,
    CAD: 0.016,
    CHF: 0.01,
    CNY: 0.085,
    SEK: 0.13,
    NZD: 0.02,
    INR: 1,
  },
};

// Flag image mapping
const flagImages = {
  USD: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/990172b0-2018-4eae-ac12-cd2aefcf8a4a.png",
  EUR: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27527126-32ec-490f-ad23-0ee079a03f06.png",
  GBP: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0fdc1d8-8511-4252-a9ab-2f208bf24f55.png",
  JPY: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47a30605-a3b9-4f61-a02b-d9c1fc4b5468.png",
  AUD: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb3f7baa-4234-43d4-b90d-0161a1fa37dc.png",
  CAD: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/61ce3aa1-bc5c-4601-b3aa-40a5c42d9196.png",
  CHF: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0de36051-a5ae-485a-b160-e78e2fa03c2d.png",
  CNY: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0430fd19-3e74-4172-97f8-e070b7497337.png",
  SEK: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4505c0a7-9915-4fc3-91f4-8aca2c6d00a4.png",
  NZD: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed7660c3-7d83-4c17-b2bf-65d69be492f5.png",
  INR: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4796accf-fe59-4295-b72d-f61e2f31a292.png",
};

// DOM elements
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const fromFlag = document.getElementById("from-flag");
const toFlag = document.getElementById("to-flag");
const swapBtn = document.getElementById("swap-btn");
const conversionResult = document.getElementById("conversion-result");
const inverseResult = document.getElementById("inverse-result");

// Initialize flags
updateFlag("from");
updateFlag("to");

// Event listeners
amountInput.addEventListener("input", convertCurrency);
fromCurrencySelect.addEventListener("change", () => {
  updateFlag("from");
  convertCurrency();
});
toCurrencySelect.addEventListener("change", () => {
  updateFlag("to");
  convertCurrency();
});
swapBtn.addEventListener("click", swapCurrencies);

// Initial conversion
convertCurrency();

// Update currency flag
function updateFlag(type) {
  const currencyCode =
    type === "from" ? fromCurrencySelect.value : toCurrencySelect.value;

  const flagElement = type === "from" ? fromFlag : toFlag;

  // Update flag image
  flagElement.src = flagImages[currencyCode];

  // Update alt text based on currency
  let countryName = "";
  switch (currencyCode) {
    case "USD":
      countryName = "United States";
      break;
    case "EUR":
      countryName = "European Union";
      break;
    case "GBP":
      countryName = "United Kingdom";
      break;
    case "JPY":
      countryName = "Japan";
      break;
    case "AUD":
      countryName = "Australia";
      break;
    case "CAD":
      countryName = "Canada";
      break;
    case "CHF":
      countryName = "Switzerland";
      break;
    case "CNY":
      countryName = "China";
      break;
    case "SEK":
      countryName = "Sweden";
      break;
    case "NZD":
      countryName = "New Zealand";
      break;
  }
  flagElement.alt = `Flag of ${countryName}`;

  // Update currency symbol
  const symbolElement = document.querySelector(`.${type}-symbol`);
  if (symbolElement && type === "from") {
    let symbol = "";
    switch (currencyCode) {
      case "USD":
        symbol = "$";
        break;
      case "EUR":
        symbol = "€";
        break;
      case "GBP":
        symbol = "£";
        break;
      case "JPY":
        symbol = "¥";
        break;
      case "AUD":
      case "CAD":
      case "NZD":
        symbol = "$";
        break;
      case "CHF":
        symbol = "CHF";
        break;
      case "CNY":
        symbol = "¥";
        break;
      case "SEK":
        symbol = "kr";
        break;
      case "INR":
        symbol = "₹";
        break;
    }
    symbolElement.textContent = symbol;
  }
}

// Swap currencies
function swapCurrencies() {
  const temp = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = temp;

  updateFlag("from");
  updateFlag("to");
  convertCurrency();
}

// Convert currency
function convertCurrency() {
  const amount = parseFloat(amountInput.value) || 0;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (fromCurrency === toCurrency) {
    conversionResult.textContent = `1 ${fromCurrency} = 1 ${toCurrency}`;
    inverseResult.textContent = `1 ${toCurrency} = 1 ${fromCurrency}`;
    return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const invertedRate = exchangeRates[toCurrency][fromCurrency];

  const convertedAmount = (amount * rate).toFixed(2);
  const invertedAmount = (1 / rate).toFixed(6);

  conversionResult.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  inverseResult.textContent = `1 ${toCurrency} = ${invertedRate.toFixed(
    6
  )} ${fromCurrency}`;
}
