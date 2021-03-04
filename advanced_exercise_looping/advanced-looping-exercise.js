const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr)
{
	let biggestNumber = 0;

	for(item of arr)
	{
		if(item > biggestNumber)
		{

			biggestNumber = item;			

		}

	}
	return biggestNumber;
}

function biggestNumberInArray2(arr)
{
	let currentBiggest = 0;
	for(let i=0; i < arr.length; i++)
	{
		if(arr[i] > currentBiggest)
		{
			currentBiggest = arr[i];

		}

	}
	return currentBiggest;
}

function biggestNumberInArray3(arr)
{	
	let theBiggestNow = 0;
	arr.forEach(x=>
		{
			
			if(x > theBiggestNow)
			{
				theBiggestNow = x;
					
			}

		}
	);
	return theBiggestNow;

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}


function checkBasket2(basket,lookingFor)
{
	var basketArray = Object.entries(basket);
	for(let i = 0; i < basketArray.length;i++)//basketArray0[glasses: 1],basketArray1[books: 2],basketArray2[floss: 100]]
	{
		
		for(let x = 0; x < basketArray[i].length;x++)//basketArray00[glasses],basketArray10[book],basketArray20[floss]////basketArray01[1],basketArray11[2],basketArray21[100]//
		{
			
			if((lookingFor === basketArray[i][0]) && (0 < basketArray[i][1]))
			{
				return true;
			}
		}
	}
	return false;
	
}



function checkBasket(basket, lookingFor)
{
	for(item in basket)
	{
		if(lookingFor === item)
		{
			return true;
		}
		
	}
	return false;
}


