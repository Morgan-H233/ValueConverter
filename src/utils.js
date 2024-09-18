const numberWordMap = {
    '1': 'ONE',
    '2': 'TWO',
    '3': 'THREE',
    '4': 'FOUR',
    '5': 'FIVE',
    '6': 'SIX',
    '7': 'SEVEN',
    '8': 'EIGHT',
    '9': 'NINE',
    '10': 'TEN',
    '11': 'ELEVEN',
    '12': 'TWELVE',
    '13': 'THIRTEEN',
    '14': 'FOURTEEN',
    '15': 'FIFTEEN',
    '16': 'SIXTEEN',
    '17': 'SEVENTEEN',
    '18': 'EIGHTEEN',
    '19': 'NINETEEN',
    '20': 'TWENTY',
    '30': 'THIRTY',
    '40': 'FOURTY',
    '50': 'FIFTY',
    '60': 'SISTY',
    '70': 'SEVENTY',
    '80': 'EIGHTY',
    '90': 'NINETY',
}

const unitWordMap = {
    1: 'THOUSAND',
    2: 'MILLION',
    3: 'BILLION'
}

// convert digits of length between 0 to 3 to words
const digitsToWord = (digits) => {
    // edge cases
    if(digits.length === 0 || '000'.includes(digits)) return ''

    let word = ''
    if(digits.length === 1){
        word = numberWordMap[digits]
        return word
    }

    // when length is 2, digit[0] is possible 0 if it is cents
    if(digits.length === 2){
        if(digits[0] === '0'){
            word = numberWordMap[digits[1]]
            return word
        }
        if(digits[0] === '1' || digits[1] === '0'){
            word = numberWordMap[digits]
            return word
        } else {
            word = numberWordMap[digits[0]+'0'] + '-' + numberWordMap[digits[1]]
            return word
        }
    }


    // length is 3
    if(digits[0] !== '0'){
        word = word + numberWordMap[digits[0]] + ' HUNDRED'
    }

    // just hundred
    if(digits[1] === '0' && digits[2] === '0'){
        return word
    }

    // not pure hudred, append AND string
    if(word.length > 0){
        word = word + ' AND '
    }
    
    if(digits[1] !== '0' && digits[1] !== '1' && digits[2] !== '0'){
        word = word + numberWordMap[digits[1]+'0'] + '-' + numberWordMap[digits[2]]
    } else {
        if(digits[1] === '0'){
            word = word + numberWordMap[digits[2]]
        } else {
            word = word + numberWordMap[digits.substring(1)]
        }
    }
    
    return word 
}

export const convert = (input) => {
    let word = ''
    // JavaScript store user input as string, use string directly, separate cents and dollars first
    const dotPosition = input.indexOf('.')
    let dollars = '', cents = '' 
    if(dotPosition !== -1){
        dollars = input.substring(0, dotPosition)
        cents = input.substring(dotPosition+1)
        if(cents.length === 1 && cents !== '0'){
            cents = cents + '0'
        }
    } else {
        dollars = input
    }

    // divide input string into groups of three digits
    let groupOfThreeDigits = Math.floor(dollars.length / 3) 
    let leftRemainDigits = dollars.length % 3
    if(leftRemainDigits === 0){
        groupOfThreeDigits--
        leftRemainDigits = 3
    }

    word = digitsToWord(dollars.substring(0, leftRemainDigits))
    let i = 0 // track current group of digits to calculate index

    if(groupOfThreeDigits > 0){
        word = word + ' ' + unitWordMap[groupOfThreeDigits]
    }

    while(groupOfThreeDigits > 0){
        groupOfThreeDigits--
        const startIndex = leftRemainDigits+i*3
        const endIndex = startIndex+3
        const threeDigits = dollars.substring(startIndex, endIndex)
        if(threeDigits !== '000'){
            word = word + ' ' + digitsToWord(threeDigits)
            if(groupOfThreeDigits !== 0){
                word = word + ' ' + unitWordMap[groupOfThreeDigits]
            }
        }
        i++
    }

    if(word != ''){
        word += ' DOLLARS'
    }

    if(cents.length > 0 && !'000'.includes(cents)){
        if(word != ''){
            word += ' AND '
        }
        word = word + digitsToWord(cents) + ' CENTS'
    }

    return word
}