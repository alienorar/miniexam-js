// Task 96
// Berilgan massiv ichidagi birinchi unik elementni toping.

function firstUnique(arr) {
    let result = arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item))
    return result[0]
}

// console.log(firstUnique([2, 3, 4, 2, 3, 5, 6, 5]));
// Output: 4

// Task 97
// Berilgan satr ichidagi barcha raqamlarni ajratib, tartiblang.

function extractAndSortNumbers(str) {
    let arr = str.split("")
    let result = []
    console.log(arr);
    for (const item of arr) {
        if (!isNaN(item)) {
            result.push(+item)
        }
    }
    return result.sort((a, b) => a - b)
}
// console.log(extractAndSortNumbers("a3c2d4b1"));
// Output: [1, 2, 3, 4]


// Task 98
// Berilgan ob'ekt ichidagi barcha qiymatlar son bo'lsa, ularni ikki barobar oshiring.

function doubleNumericValues(obj) {

    for (const key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2
        }
        else if (typeof obj[key] === "object", obj[key] !== null) {
            doubleNumericValues(obj[key])
        }
    }
    return obj
}

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    }
};
// console.log(doubleNumericValues(obj));
// Output: { a: 2, b: { c: 4, d: { e: 6, f: 8 } } }


// Task 99
// Berilgan ob'ekt ichidagi barcha kalitlarni camelCase formatida qaytaring.

function toCamelCase(obj2) {
    for (const key in obj2) {
        if (typeof obj2[key] === "string") {
            obj2[key] = _.toCamelCase(obj2[key])
        }
        else if (typeof obj2[key] === "object", obj2[key] !== null) {
            toCamelCase(obj[key])
        }

    }

    return obj2
}
const obj2 = {
    'first_key': 1,
    'second-key': {
        'third_key': 2
    }
};
// console.log(toCamelCase(obj2));
// Output: { firstKey: 1, secondKey: { thirdKey: 2 } }

// Task 100
// Berilgan ob'ekt ichidagi barcha stringlarni berilgan funksiya yordamida o'zgartiring.

function transformStrings(obj4, transformFunc) {
    let arr = [{ value: obj4, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })

            }
            else {
                value[key] = value[key].toUpperCase()
            }
        }
    }
    return obj4
}

const obj4 = {
    a: "hello",
    b: {
        c: "world",
        d: {
            e: "test"
        }
    }
};
// console.log(transformStrings(obj4, str => str.toUpperCase()));
// // Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }

// Task 102
// Berilgan massiv ichidagi elementlarni qatorga birlashtiring, faqat takrorlanmaydigan elementlarni saqlang.

function uniqueConcat(arr) {
    let set = new Set(arr)
   return Array.from(set).join("")
}

// console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd']));
// Output: "abcd"





