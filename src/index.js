
function splitNumber(number){
    return [Math.floor(number/10), number%10]
}

let units = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
}

let specificNumber = {
   0: 'zero',
   10: 'ten',
   11: 'eleven',
   12: 'twelve',
   13: 'thirteen',
   14: 'fourteen',
   15: 'fifteen',
   16: 'sixteen',
   17: 'seventeen',
   18: 'eighteen',
   19: 'nineteen',
}

let tens = {
   0: '',
   1: '',
   2: 'twenty',
   3: 'thirty',
   4: 'forty',
   5: 'fifty',
   6: 'sixty',
   7: 'seventy',
   8: 'eighty',
   9: 'ninety',
}

module.exports = function toReadable (number, array = [], capasity=0) {
     
    if (number === -1) {
        return array.reverse().join(' ')
    }
    if (number in specificNumber && capasity == 0) {
        array.push(specificNumber[number])
        return toReadable(-1, array)
    } else if (number%100 in specificNumber && capasity == 0 && number%100 != 0) {
        array.push(specificNumber[number%100])
        return toReadable(Math.floor(number/100), array, 2)
    }
    else if (capasity == 0) {
        base = Math.floor(number/10)
        rem = number%10
        rem != 0 ? array.push(units[rem]) : null
        return toReadable(base == 0 ? -1 : base, array, 1)
    }
    else if (capasity == 1) {
        base = Math.floor(number/10)
        rem = number%10
        rem != 0 ? array.push(tens[rem]) : null
        return toReadable(base == 0 ? -1 : base, array, 2)
    }
    else if (capasity == 2) {
        array.push(units[number%10]+' hundred')
        return toReadable(-1, array, 0)
    }
}