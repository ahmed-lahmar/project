// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// In this Exercise we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.

function isEven(n) {
n = Math.abs(n);
  if (n===0) 
    return true;
  else if (n===1)
    return false;
  else if (n%2===0)
    return true ;
 else 
 	return false 

};


//=======================================================================
/*                                  Q2                                 */
//=======================================================================
// * No Loops Allowed *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. 

// With strings you will need to account for case.

function check (arr, x){
for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return true;
        }
    }
    return false;


};


//=======================================================================
/*                                  Q3                                 */
//=======================================================================

// Take an array and remove every second element out of that array. 
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

function removeEveryOther (arr) {
	for ( var i=0; i< arr.length ; i++){
		return arr.slice (2,arr.length)
	}

}



//=======================================================================
/*                                  Q4                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// use a while loop for this Exercise

function squareSum(numbers){
	var total =1

	while ( )

};


//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// The Cat
// Write yourself a virtual cat - animals with a CLI are so much nicer than ones with fur.

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Next, write methods that increase and decrease those properties. Call them something that actually represents what would increase or decrease these things, like "feed", "sleep", or "pet".
// Last, write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
// Bonus: Make the functions as arbitrary as cats are - sometimes make it so the cat doesn't want to be petted.

var cat = {}

// function 
