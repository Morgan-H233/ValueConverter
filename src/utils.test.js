import { expect, test } from "vitest";
import { converter } from "./utils";

/*
 Test the convert function only
 Assume the user input validation is handled by the <input />
 Therfore do not test here if the input passed into the function is not a valid number
*/
/*
 Test cases shall include edge cases and common cases
 Edge cases are numbers that are a multiples of the available units so they have only one unit to add into the output, such as 1000, 1000000
 Common cases are numbers that have multiple units
*/



test('Amount 1', () => {
    expect(converter('1')).toBe('ONE DOLLARS')
})

test('Amount 23', () => {
    expect(converter('23')).toBe('TWENTY-THREE DOLLARS')
})

test('Amount 0.45', () => {
    expect(converter('0.45')).toBe('FORTY-FIVE CENTS')
})

test('Amount 100', () => {
    expect(converter('100')).toBe('ONE HUNDRED DOLLARS')
})

test('Amount 1000', () => {
    expect(converter('1000')).toBe('ONE THOUSAND DOLLARS')
})

test('Amount 1000000', () => {
    expect(converter('1000000')).toBe('ONE MILLION DOLLARS')
})

test('Amount 1000000000', () => {
    expect(converter('1000000000')).toBe('ONE BILLION DOLLARS')
})

test('Amount 101', () => {
    expect(converter('101')).toBe('ONE HUNDRED AND ONE DOLLARS')
})

test('Amount 120', () => {
    expect(converter('120')).toBe('ONE HUNDRED AND TWENTY DOLLARS')
})

test('Amount 123.00', () => {
    expect(converter('123.00')).toBe('ONE HUNDRED AND TWENTY-THREE DOLLARS')
})

test('Amount 123.45', () => {
    expect(converter('123.45')).toBe('ONE HUNDRED AND TWENTY-THREE DOLLARS AND FORTY-FIVE CENTS')
})

test('Amount 1234.56', () => {
    expect(converter('1234.56')).toBe('ONE THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})

test('Amount 11234.56', () => {
    expect(converter('11234.56')).toBe('ELEVEN THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})

test('Amount 111234.56', () => {
    expect(converter('111234.56')).toBe('ONE HUNDRED AND ELEVEN THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})

test('Amount 1111234.56', () => {
    expect(converter('1111234.56')).toBe('ONE MILLION ONE HUNDRED AND ELEVEN THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})

test('Amount 11111234.56', () => {
    expect(converter('11111234.56')).toBe('ELEVEN MILLION ONE HUNDRED AND ELEVEN THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})

test('Amount 111111234.56', () => {
    expect(converter('111111234.56')).toBe('ONE HUNDRED AND ELEVEN MILLION ONE HUNDRED AND ELEVEN THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})

test('Amount 1111111234.56', () => {
    expect(converter('1111111234.56')).toBe('ONE BILLION ONE HUNDRED AND ELEVEN MILLION ONE HUNDRED AND ELEVEN THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})