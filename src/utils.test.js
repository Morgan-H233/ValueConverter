import { expect, test } from "vitest";
import { conver2 } from "./utils";

test('Amount 1', () => {
    expect(conver2('1')).toBe('ONE DOLLARS')
})

test('Amount 100', () => {
    expect(conver2('100')).toBe('ONE HUNDRED DOLLARS')
})

test('Amount 1000', () => {
    expect(conver2('1000')).toBe('ONE THOUSAND DOLLARS')
})

test('Amount 1000000', () => {
    expect(conver2('1000000')).toBe('ONE MILLION DOLLARS')
})

test('Amount 1000000000', () => {
    expect(conver2('1000000000')).toBe('ONE BILLION DOLLARS')
})

test('Amount 123.45', () => {
    expect(conver2('123.45')).toBe('ONE HUNDRED AND TWENTY-THREE DOLLARS AND FOURTY-FIVE CENTS')
})

test('Amount 1234.56', () => {
    expect(conver2('1234.56')).toBe('ONE THOUSAND TWO HUNDRED AND THIRTY-FOUR DOLLARS AND FIFTY-SIX CENTS')
})