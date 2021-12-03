// STEPS START
// // * Set a variable that would take in the String of sentence 
// // * Input the number of character in the string 
// // * Input the number of words in the string 
// // * Loop through each of the character in the string   
// // * Create an array that consist of every vowel in  it
// // * Use array to check if current character includes a vowel
// // * Then return array
// STEPS END


var test = 'Dayo tried coding today.'

numberofChar = test.length;
numberofWords = test.split(' ');

console.log(numberofChar,numberofWords);
var vowelsCount = 0;

const vowels = ['a', 'e', 'i', 'o', 'u']
 for (let char of test) {
	 if (vowels.includes(char)) {
		 vowelsCount++
	 }
	 
 }
