// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const taromiwa = { firstname : 'taro', lastname : 'miwa', "favorite food" : 'sushi', 
bestFriend: { firstname : 'tom', lastname : 'hayashi', "favorite food" : 'ramen'}};

// 2. console.log best friend's firstName and your favorite food
console.log(taromiwa.bestFriend['favorite food']);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const arrayTicTacToe = 
[['-', 'O', '-'],
['-', 'X', 'O'],
['X', '-', 'X']];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
arrayTicTacToe[0][2] = 'O';


// 5. Log the grid to the console.
console.log(arrayTicTacToe[0]);
console.log(arrayTicTacToe[1]);
console.log(arrayTicTacToe[2]);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,}$/;
const str = 'foo@bar.baz';

console.log(emailRegex.test(str));


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const dateAssignmentDate = new Date(assignmentDate);

console.log(dateAssignmentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(assignmentDate);
dueDate.setDate(dateAssignmentDate.getDate() + 7);

console.log(dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const strMonth = months[dueDate.getMonth()];
const strDay = dueDate.getDate();
const strYear = dueDate.getFullYear();
const numMonth = dueDate.getMonth()+1;
const strMonthPad = numMonth.toString().padStart(2, '0');

// 10. log this value using console.log

console.log(`<time datetime="${strYear}-${strMonthPad}-${strDay}">${strMonth} ${strDay}, ${strYear}</time>`);
