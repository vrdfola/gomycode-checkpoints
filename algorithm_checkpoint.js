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

 