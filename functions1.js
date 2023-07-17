// Funcitons 1 Interactive Lecture

// Converting to a Boolean --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that number is not 0, it will console.log as true
let myFavNum = 7
let myNumBoo = Boolean(myFavNum)
console.log(myNumBoo)
// create a string variable, on the next line convert that variable to a boolean with the Boolean method (assign it to another variable)
// if that string is not a set of empty quotes, it will console.log as true
let myString = ''
let myStringBoo = Boolean(myString)
console.log(myStringBoo)

// Converting to a Number --------------------------------------------------------------------

// create a boolean variable, on the next line convert that variable to a number with the Number method (assign it to another variable)
// if you set the variable to "true", it will console.log as 1
// if you set the variable to "false", it will console.log as 0
let iLoveCats = false
let catsNum = Number(iLoveCats)
console.log(catsNum)
// create a variable equal to a string of numbers, on the next line convert that string into a number using the Number method shorthand (assign it to another variable)
// console.log both variables and they should be different colors in the terminal since one is a number and the
let bestNum = '34456'
let num = Number(bestNum)
console.log(bestNum)
console.log(num)
// shorthand number conversion can be done all in one line
// set a variable equal to a string with the shorthand operator in front of it, console.log it and the result will be the same as the other two versions
let inOneLine = +'77777'
console.log(inOneLine)
// set a string variable equal to your height in inches (should look like this '75in')
// convert that string into a number with the Number method and the parseInt method (assigning both to new variables)
// when you console.log the variables, one will succeed and one will fail
let height = '78in'
let withNum = +height
let withParseInt = parseInt(height)
console.log(withNum, withParseInt)
// Converting to a String --------------------------------------------------------------------

// create a number variable, on the next line convert that variable to a string with the String method (assign it to another variable)
// when you console.log the 2 variables, they should be different colors
let big = 72
let bigstring = String(big)
console.log(big, bigstring)
// create another variable but this time use concatenation of empty quotes to turn your number into a string
let smallString = 62 + ''
console.log(smallString)
// create a boolean variable (to either true or false, your choice)
// create another variable equal to a string (saying whatever you want) and concatenate the boolean variable to it
// if you console.log it, the boolean will now be a string
const imTall = true
let whyImTall = ' I am 6 foot 6 inches tall, so it is ' + imTall + ' that I am tall' 
console.log(whyImTall)
// String Methods --------------------------------------------------------------------

// create a string variable and use the string methods listed below to see if your string includes, starts with, and ends with the letter(s) you input as parameters
let naming = 'Billy Bob'
// .includes()
console.log(naming.includes('ll'))
// .startsWith()
console.log(naming.startsWith('C'))
// .endsWith()
console.log(naming.endsWith('b'))

let nameArr = ['Hyrum', 'Bob', 'Tim']
for(let i =0; i< nameArr.length; i++){
    if(nameArr[i].endsWith('m')){
        console.log('You are cool')
    }else{
        console.log("goodbye")
    }
}

// Trimming Whitespace --------------------------------------------------------------------

// set a variable equal to a string with extra spaces at the beginning and end of the words in your string
// use .trim() on the string and assign it to another variable to remove the extra spaces
let space = '     where are we      '
console.log(space.trim())

// Changing Casing --------------------------------------------------------------------

// set a variable "lowercase" equal to a string with all the letters being in lowercase
// try to use toUpperCase() on "lowercase" without reassigning it (this will fail)
// do the same except reassign "lowercase" to be lowercase.toUpperCase() (this will be successful)
let lowercase = 'hyrumvanslyke is super cool'
lowercase.toUpperCase()
console.log(lowercase)
let bigger = lowercase.toUpperCase()
console.log(bigger)

// Replacing Characters --------------------------------------------------------------------

// make a variable that is equal to a string saying whatever you want
// use .replace() to replace the first letter of your choosing from the string
// use .replaceAll() to replace every letter of your choosing from the string
let vampire = 'better grab your garlic and cross stakes'
let hurry = vampire.replace("grab","stash")
console.log(hurry)
let noSpace = vampire.replaceAll(" ", "-")
console.log(noSpace)
// Splitting Strings --------------------------------------------------------------------

// make a string variable saying whatever you want
// split the string with .split(' '), .split(','), and .split('')
// console.log them to see the difference
let theBestSpidey = 'Every spider-man is awesome, especially insomiacs version'
let spaces = theBestSpidey.split(' ')
let comma = theBestSpidey.split(',')
let nothing = theBestSpidey.split('')
console.log(spaces)
console.log(comma)
console.log(nothing)// cant console log together
// Joining Strings --------------------------------------------------------------------

// make an array variable containing a few different strings
// join the array with .join(), .join(''), .join(' '), .join(' + ')
// console.log them to see the difference
let spiderman = ['radioactive', 'spider', 'bit', 'him']
let joinZero = spiderman.join()
let joinNothing = spiderman.join('')
let joinSpace = spiderman.join(' ')
let joinAdd = spiderman.join(' + ')
console.log(spiderman)
console.log(joinZero)
console.log(joinNothing)// console log seperate
console.log(joinSpace)
console.log(joinAdd)

// Functions --------------------------------------------------------------------

// create functions with no params, 1 param, and 2 params
// then show the difference between a return value vs just console logging something in the function
function zero (){
console.log("this function has no parameters")
}
function uno(word){
console.log(`The word I chose was ${word}`)
}
function dos(two, one){
    console.log(two + one)
}
zero()
uno('hyrum')
dos(45, 9)

function hasReturn(one, two){
    return one + two
}

let valuesOfTp = dos(6,3)
let valuesOfHr = hasReturn(6,3)
console.log(valuesOfTp)// cant console log a console log beacuse there is no return
console.log(valuesOfHr)
// Scope --------------------------------------------------------------------

// show outer scope vs a function's inner scope by setting variables inside and outside of a function
// console.log both variables, one of them is going to give an error
let outerVar= 'Im in the outer scope'
function scopeTester(){
    let innerVar= 'Im in the inner scope of the scope Tester'
    console.log(outerVar, innerVar)
}
scopeTester()

// Syntaxes --------------------------------------------------------------------

// show an example of each of the 3 function types doing the same block of code
// declaration
function rooter(num){
    return Math.sqrt(num)
}


// expression
const rooter2 = function(num){
    return Math.sqrt(num)
}

// arrow
const rooter3 = (num) =>{
    return Math.sqrt(num)
}

console.log(rooter(36))
console.log(rooter2(81))
console.log(rooter3(25))
// then show an arrow function with implicit return as well
let implicit = word => `This arrow function has ${word} return`
console.log(implicit('implicit'))
const rooter4 = num => Math.sqrt(num)
console.log(rooter4(16))