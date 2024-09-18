# ValueConverter

Thoughts on solutions:
To present a number as words, we know that only change is the unit such as from thousand to million. The words for a three-digit number are the same no matter what unit it is. Words of numbers between 1 and 20, and a multiplier of 10 are unique words. Words of other numbers are a combination of these unique words. Therefore I think it makes sense to have store a key value pair/map of these unique words, and write a function to combine them for numbers of 3 digits, or say, within a thousand.

As JavaScript store a user input as string, I divide the input into k groups of 3-digit strings. Then I pass each string into the function to convert them into words. Depends on the value of current k of the string, I append the unit after the word. I need to check quite a few conditions such as if the first character of a string is '0' to carefully get the correct unique word from the map. Due to the number of conditions I have to put in place, I started to think if any other better way to implement.

The other solution I have in mind is to convert the user input into a number type, then I would be able to divide the number by 1000 and get its remainder and quotient also in number type. Remainder would be pass into the function to convert while the quotient continues to be divide by 1000 until it reach 0.

I then think of the complexity of the two solutions. The first one is O(n) if we say n is the length of the number. We need to map each digit to its word. For the second one, I initially thought it would be different but it actually is also O(n) as the number of divisions by 1000 is the same as the number of groups of 3-digit strings that we would get from first solution. Therefore, complexity wise they are the same. The only different is that which solution I would be provide a better code that is easier to read and maintainable if needed.



