// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.flatMap(x => x.join(' '));

//-------------------My tests-----------------------------------------//
const test4 = greeting.flatMap(item => item.join(' '));
console.log(test4);
// (3) ["Hello young grasshopper!", "you are", "learning fast!"]

const test5 = greeting.flatMap(item => item + '');
console.log(test5);
// (3) ["Hello,young,grasshopper!", "you,are", "learning,fast!"]

const test6 = greeting.flatMap(item => item.join(''));
console.log(test6);
//(3) ["Helloyounggrasshopper!", "youare", "learningfast!"]
//-------------------//My tests-----------------------------------------//


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')).join(' '));//Hello young grasshopper! you are learning fast!

//-------------------My tests-----------------------------------------//
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.flatMap(x=> x.join(' '));
console.log(newGreeting);//(3) ["Hello young grasshopper!", "you are", "learning fast!"]
newGreeting[0] = newGreeting[0].slice(0,-1);//"Hello young grasshopper"
console.log(newGreeting);//(3) ["Hello young grasshopper", "you are", "learning fast!"]
const newString = newGreeting.join().replace(',','');
console.log(newString.replace(',',''));
//Hello young grasshopperyou are,learning fast!
//-------------------//My tests-----------------------------------------//


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '



//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
