var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last(x) {
    var arr = [1, 2, 3];
    x = (arr.slice(-1));
    alert("Last element in the array is = " + x);
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArr = [];

var even = function() {
  for (var i = 0; i < evenArray.length; i++) {
     if (evenArray[i] % 2 === 0); {
		evenArr.push(evenArray[i]);
     	}
  }alert(evenArr);
};
even();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

var findRanNum = function() {
	for (var i = 0; i < randomArray.length; i++) {
		if (randomArray[i] === getRandomArbitrary()) {
			alert('The ' + randomArray[i] + ' matchs number in ' + getRandomArbitrary);
		else (randomArray[i] !== getRandomArbitrary()) {
			alert('The ' + randomArray[i] + ' did not match the number in ' + getRandomArbitrary);
			}
		}
};
findRanNum();

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, 
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
second = first.concat(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
//The reduce() method applies a function against an accumulator and each value of the array 
//(from left-to-right) has to reduce it to a single value.
//cb = callback (executes on each element(word) in the string)
//str = str or arr
function strLen (cb, str) {
  return (str.length > cb.length) ? str: cb;
}
function longestWord(sentence) {
    var words = str.split(' ');
    return words.reduce(strLen);//reduce executes the callback function
}
longestWord(sentence);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
var capitalize = function(str)
{
    var words = str.split(" ");//split str into individaul words
    for ( var i = 0; i < words.length; i++ )//loop through the string
    {
        var j = words[i].charAt(0).toUpperCase();//make the first character of each word capitalized
        words[i] = j + words[i].substring(1);//join the capitalized string back the rest of the word
    }
    return words.join(" ");//join all the words back together into a string with all the first words capitalized
};
capitalize(myPoem);//invoke the function


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(str)
{
  return str.split(/[aeiou]/).length - 1;//counted backwards to receive an accurate count of vowels, count added 1 more if startging from the beging
};
vowelCounter(theOdyssey);
 


























