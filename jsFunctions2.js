/*
 1. Define a function maxOfTwoNumbers that takes two numbers as arguments
 and returns the largest of them. Use the if-then-else construct 
 available in Javascript. Do some googling to figure this out if 
 you forget how conditionals work.
*/

const maxOfTwoNumbers = (a, b) =>{
    if(a > b){
        return a
    }else if(a < b){
        return b
    }else if(a === b){
        return "The numbers are equal"
    }else{
        return "Something has gone wrong"
    }
}

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

const maxOfThree = (x,y,z) =>{
    if(x > y){
        if(x > z){
            return x
        }else if (x < z){
            return z
        }else{
            return "The largest numbers are equivalent or an error has occured"
        }
    }else if(x < y){
        if(y > z){
            return y
        }else if(y < z){
            return z
        }else{
            return "The largest numbers are equivalent or an error has occured"
        }
    }else if(x === y && x > z){
        return x
    }else if(x === y && x < z){
        return z
    }else if(x === y && x === z){
        return x
    }
}

// console.log(maxOfThree(1,5,5))

/*
3.Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, false otherwise.
*/

const isCharacterAVowel = (char) =>{
    if(char[0] === 'a' || char[0] === 'e' || char[0] === 'i' || char[0] === 'o' || char[0] === 'u' ){
        return true
    }else{
        return false
    }
}

//console.log(isCharacterAVowel('e'))

/*
 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
 all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and 
 multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = (array = []) =>{
    let sum = 0

    for(value of array){
        sum += value
    }

    return sum
}

const multiplyArray = (array = []) =>{
    let product = 1

    for(value of array){
        product *= value
    }

    return product
}

const testArray = [1,2,3,4]
// console.log(sumArray(testArray))
// console.log(multiplyArray(testArray))

/*
5. Write a function that returns the number of arguments passed to the function when called.
*/

function returnNumberOfArguments () {
    return arguments.length
}

//console.log(returnNumberOfArguments(12,33,55))

/*
 6. Define a function reverseString that computes the reversal of a string. 
 For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = (string) =>{
    let backwardsString = ''

    for(i = string.length-1; i >= 0; i--){
        backwardsString += string[i]
    }

    return backwardsString

}

//console.log(reverseString("Yare yare daze"))


/*
 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/

const findLongestWord = (wordArray) =>{
    let longestString = ''

    for (word of wordArray){
        if(word.length > longestString.length){
            longestString = word
        }
    }

    return longestString
}

const arrayOfWords = ["Bardiche", "Morningstar", "Schimitar", "Spear", "Halberd", "Sword"]

//console.log(findLongestWord(arrayOfWords))


/*
 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/

const filterLongWords = (wordArray, minLength) =>{
    let returnArray = []

    for (word of wordArray){
        if(word.length > minLength){
            returnArray.push(word)
        }
    }

    return returnArray
}

const arrayLikeMe = ["Dream", "Me", "Oh", "Dreamer", "Down", "to", "your", "core", "Feel", "me", "completer", "Feedin", "on", "fever"]

// console.log(filterLongWords(arrayLikeMe,4))