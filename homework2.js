// 1
function getBiggerNumbersThanMarked(numbers, number) {
    let arr = [];
    for (let index in numbers) {
        if (numbers[index] > number) {
            arr.push(numbers[index])
        }
    }
    return arr.length > 0 ? arr : 'Such values do not exist.'
}

// 2
function getEachEvenDigitNumbers(number1, number2) {
    let arr = [];
    for (let i = number1; i <= number2; i++) {
        if (i % 2 === 0 && i.toString()[0] % 2 === 0) {
            arr.push(i)
        }
    }
    return arr.length > 0 ? arr.join(', ') : 'Such numbers does not exist.'
}

// 3
function getSortingViolatedNumber(numbers) {
    let violatedIndex = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            violatedIndex = i + 1;
            break
        }
    }
    return violatedIndex !== 0 ? violatedIndex : -1
}

// 4
function getLargestProduct(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] * numbers[i + 1] > product) {
            product = numbers[i] * numbers[i + 1]
        }
    }
    return product
}

// 5
function getCountOfMissingNumbers(numbers) {
    numbers.sort((a, b) => {
        return a - b
    });
    let count = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== 1) {
            count += (numbers[i + 1] - numbers[i]) - 1;
            console.log(count)
        }
    }
    return count
}

// 6
function sumOfEachRow(numbers) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        let sum = 0;
        for (let k = 0; k < numbers[i].length; k++) {
            sum += numbers[i][k];
        }
        arr.push(sum)
    }
    return arr
}

// 7
function getNewArray(numbers) {
    let arr = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            arr.push(numbers[i])
        }
    }

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr.length
        }
    }
    return arr
}