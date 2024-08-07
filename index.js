// Probleum -1 REVERSE THE STRING
/*
// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Input string
  let input = "Hello, World!";
  
  // Delay of 2 seconds before reversing the string
  setTimeout(() => {
    let reversedString = reverseString(input);
    console.log(reversedString);
  }, 2000);
*/


//  Probleum - 2 Random Number Generator with Delay and Progress Indication:
/*
// Set the delay time (in milliseconds)
let delay = 3000;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Countdown function
function countdown(timeLeft) {
  if (timeLeft > 0) {
    console.log(`Time remaining: ${timeLeft} seconds`);
    setTimeout(() => countdown(timeLeft - 1), 1000);
  } else {
    let randomNumber = generateRandomNumber();
    console.log(`Generated random number: ${randomNumber}`);
  }
}

// Start the countdown and random number generation after the specified delay
countdown(delay / 1000);
*/


// Probleum - 3 Build a feature for Store's Inventory.
/*
// Store's inventory with prices in USD
const inventoryUSD = {
  apple: 1,
  banana: 0.5,
  orange: 0.75,
  mango: 1.5
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices to INR
function convertPricesToINR(inventory) {
  // Use Object.entries to get an array of [key, value] pairs
  return Object.fromEntries(
    // Use map to convert each price
    Object.entries(inventory).map(([item, price]) => [item, price * exchangeRate])
  );
}

// Convert inventory prices to INR
const inventoryINR = convertPricesToINR(inventoryUSD);

console.log(inventoryINR);
*/


// Probleum - 4 Filtering and Capitalizing: Books Published After 2010 with Author Names.
/*
// Sample list of books
const books = [
  { title: "Book One", author: "john doe", year: 2005 },
  { title: "Book Two", author: "jane smith", year: 2012 },
  { title: "Book Three", author: "emily davis", year: 2018 },
  { title: "Book Four", author: "michael brown", year: 2008 }
];

// Function to capitalize author names
function capitalizeName(name) {
  return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to filter and capitalize books
function filterAndCapitalizeBooks(books) {
  return books
    .filter(book => book.year > 2010)
    .map(book => ({
      ...book,
      author: capitalizeName(book.author)
    }));
}

// Get the filtered and capitalized books
const filteredBooks = filterAndCapitalizeBooks(books);

console.log(filteredBooks);
*/


// Probleum - 5 URL validation.
/*
// Function to validate URLs
function validateURL(url) {
  const regex = /^(https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+)$/;
  return regex.test(url);
}

// Sample URLs for testing
const urls = [
  "http://example.com",
  "https://example.com",
  "http://www.example.com",
  "https://www.example.com",
  "http://example",
  "ftp://example.com",
  "https://example..com",
  "https://example.com/path"
];

// Validate each URL and print the result
urls.forEach(url => {
  if (validateURL(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
});
*/


// Probleum - 6 LinkedIn Profile URL Validator.
/*
// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
  // Regex pattern to match the LinkedIn profile URL format
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  return regex.test(url);
}

// Sample LinkedIn profile URLs for testing
const urls = [
  "https://www.linkedin.com/in/johndoe",
  "https://www.linkedin.com/in/john_doe123",
  "https://www.linkedin.com/in/johndoe-2024",
  "https://www.linkedin.com/in/johndoe-2024-",
  "https://www.linkedin.com/in/johndoe2024",
  "https://www.linkedin.com/in/johndoe2024more",
  "https://www.linkedin.com/in/johndoe2024@!",
  "https://www.linkedin.com/in/johndoe2024!@#"
];

// Validate each URL and print the result
urls.forEach(url => {
  if (validateLinkedInURL(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
});
*/