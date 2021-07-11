function DecimalTo64(decimal,precision=10){
    const sign = decimal > 0 ? '' : '-'

    const absDecimal = Math.abs(decimal)

    let decimalPart = absDecimal % 1

    let integerPart = absDecimal - decimalPart

    let intArray = []

    let decArray = []

    while(integerPart > 0) {
        let remainder = integerPart % 64
        intArray.unshift(remainder)
        integerPart =Math.floor(integerPart / 64)
    }

    if(intArray.length===0){
        intArray.push(0)
    }

    while(precision > 0) {
        decimalPart = decimalPart * 64
        decArray.push(Math.floor(decimalPart))
        decimalPart = decimalPart - Math.floor(decimalPart)
        precision  = precision - 1
    }

    const intString = intArray.map((item)=>`[${item}]`).join('')
    const decString = decArray.map((item)=>`[${item}]`).join('')
    const result = `${sign}${intString}.${decString}`

    return result
}

console.log(DecimalTo64(100))
console.log(DecimalTo64(-456.123))
console.log(DecimalTo64(123.456))