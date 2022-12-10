/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    const newStr = str.toLowerCase()
    .split('')
    .map((e, i) => (i%2 != 1 ? e.toUpperCase() : e))
    .join('')
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));