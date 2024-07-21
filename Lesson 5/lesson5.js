// Function Definitions

// 1. max() - Returns the largest of two numbers
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// 2. maxOfThree() - Returns the largest of three numbers
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

// 3. isVowel() - Checks if a character is a vowel
function isVowel(char) {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char);
}

// 4. sum() - Sums all numbers in an array
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// 5. multiply() - Multiplies all numbers in an array
function multiply(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

// 6. reverse() - Reverses a string
function reverse(str) {
    return str.split('').reverse().join('');
}

// 7. findLongestWord() - Returns the length of the longest word in an array
function findLongestWord(words) {
    let longest = 0;
    for (const word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

// 8. filterLongWords() - Filters words longer than a given length
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// Test Cases

function myFunctionTest(expected, func) {
    const result = func();
    if (result === expected) {
        console.log("TEST SUCCEEDED");
    } else {
        console.log(`TEST FAILED: Expected ${expected} but got ${result}`);
    }
}

// Testing max()
myFunctionTest(20, () => max(20, 10));
myFunctionTest(10, () => max(10, 10));

// Testing maxOfThree()
myFunctionTest(30, () => maxOfThree(10, 20, 30));
myFunctionTest(20, () => maxOfThree(10, 20, 15));

// Testing isVowel()
myFunctionTest(true, () => isVowel('a'));
myFunctionTest(false, () => isVowel('b'));

// Testing sum()
myFunctionTest(10, () => sum([1, 2, 3, 4]));
myFunctionTest(0, () => sum([]));

// Testing multiply()
myFunctionTest(24, () => multiply([1, 2, 3, 4]));
myFunctionTest(1, () => multiply([]));

// Testing reverse()
myFunctionTest("ratset gaj", () => reverse("jag testar"));
myFunctionTest("dcba", () => reverse("abcd"));

// Testing findLongestWord()
myFunctionTest(5, () => findLongestWord(["apple", "banana", "cherry"]));
myFunctionTest(6, () => findLongestWord(["kiwi", "melon", "orange"]));

// Testing filterLongWords()
myFunctionTest(["banana", "cherry"], () => filterLongWords(["apple", "banana", "cherry"], 5));
myFunctionTest([], () => filterLongWords(["kiwi", "melon", "orange"], 10));

// Additional Exercises

// a) Multiply each element by 10
const multiplyBy10 = arr => arr.map(x => x * 10);
console.log(multiplyBy10([1, 2, 3])); // Expected [10, 20, 30]

// b) Return array with all elements equal to 3
const returnThree = arr => arr.map(() => 3);
console.log(returnThree([1, 2, 3])); // Expected [3, 3, 3]

// c) Return the product of all elements
const productOfAll = arr => arr.reduce((product, num) => product * num, 1);
console.log(productOfAll([1, 2, 3])); // Expected 6
