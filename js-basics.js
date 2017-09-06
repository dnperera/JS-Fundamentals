//ONE:
var word = "";
word ="Hello";
word += " ";
word += "World";
console.log( word);

//Two

for( var i=0; word.length >i;i++){
	console.log(word[i]);
}

//Three
var animal = "the fox says";
//index of the f in the animal variable

console.log( animal.indexOf("f"));

//four
var animal = "the giraffe says sup";

if(animal.indexOf("giraffe") >0){
	console.log(true);
}
else{
	console.log(false);
}

//console.log the e in this word without using the letter e

var word = "fiesta";
word.charAt(2);

//SEVEN:

var greeting = "hello world"; 
greeting = greeting.replace(/o/g, 'g')

var f = "apple";

//write code to console.log ppl in the variable f without using the letters ppl and using the variable f
console.log(f.slice(1,4));
