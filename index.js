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

function fn(str) {
   let result = []
    let arr = str.split('-') && str.split('_')
    // console.log(arr);
    arr.map(item => {
      result.push(item[0].toUpperCase() + item.slice(1));
    });  
    return result.join("")
}
// console.log(fn('my-hyphen_string'));


// results in 'myHyphenString'

// Task 100
// Berilgan ob'ekt ichidagi barcha stringlarni berilgan funksiya yordamida o'zgartiring.

function transformStrings(obj3, transformFunc) {
//     function transform() {
//         for (const key in obj3) {
//             if (typeof obj3[key] === "string") {
//               return transformFunc(obj3[key])
//             }
//             else if (typeof obj3[key] === "object", obj3[key] !== null) {
//                 if (obj3.hasOwnProperty(key)) {
//                     obj3[key] = transform(obj3[key])
//                 }
             
//             }
//         }
//         return obj3
//     }
  
// return transform(obj3)

Object.defineProperty()
}
const obj3 = {
    a: "hello",
    b: {
        c: "world",
        d: {
            e: "test"
        }
    }
};
console.log(transformStrings(obj3, str => str.toUpperCase()));
// Output: { a: "HELLO", b: { c: "WORLD", d: { e: "TEST" } } }