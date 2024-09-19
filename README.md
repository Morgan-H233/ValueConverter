# ValueConverter

## Run the web app
```bash
npm ci
npm run dev
```

To run the test cases
```bash
npm run test
```

## Thoughts on solutions

To present a number as words, the primary change occurs at the unit level, such as moving from thousands to millions, or millions to billions. The words for a number with up to three digits remain the same, regardless of the unit. Numbers between 1 and 20, as well as multiples of 10, have unique words. Other numbers are a combination of these unique words. With this observation, I decided to write a function to convert numbers less than a thousand into words by storing these unique words in a key-value pair/map and combining them as needed.

The final solution I decided to submit involves first converting the user input into a number. This allows me to divide it by 1000 to get both the quotient and remainder as valid numbers. The remainder is passed to the function to handle numbers under 1000, while the quotient continues to be divided by 1000 until it reaches zero. This method simplifies the core function, as I can directly check whether the number is divisible by 100, 10, or can be mapped to a unique word for numbers less than 20.

My initial solution was to divide the input string into groups of three digits without converting it to a number. Each group would then be passed to the function for conversion, with the appropriate unit (e.g., "THOUSAND") appended later based on the group's position. However, this approach required handling many conditions, such as checking if a digit is '0' and its index within the 3-digit string, which made the implementation more complex and harder to read.

Both solutions have the same complexity of O(n), where 'n' is the length of the number, as each solution ultimately processes each digit. The second solution, however, results in cleaner, more maintainable code, which is why I chose to submit it.