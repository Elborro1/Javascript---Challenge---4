// const day = 'wednesday';

// switch (day) {
//     case 'monday' : // strict (monday === day)
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday' :
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday' :
//     case 'thursday' :
//         break;
//         console.log('Write code');
//     case 'friday' :
//         console.log('Record videos');
//         break;
//     case 'saturday' :
//     case 'sunday' :
//         console.log('Relax');
//         break;
//     default:
//         console.log('Not a valid day');
// }


// if(day === 'monday'){
//     console.log('Plan course structure','Go to coding meetup');
// } else if(day === 'tuesday'){
//     console.log('Prepare theory videos')
// } else if(day === 'wednesday' || day === 'thursday'){
//     console.log('write code')
// } else if(day === 'friday'){
//     console.log('Record videos')
// } else if(day === 'saturday' || day === 'sunday'){
//     console.log( 'Relax')
// } else{
//     console.log('Not a valid day');

// }

// Statements and Expressions //

// expression: 3 + 4
//               1991
//               true && false && !false
//                 strings

// statements: if/else and switch


// The conditional operator //

const age = 24;
// age >= 18 ? console.log(`I like to drink wine 😄`) :
// console.log(`I like to drink water 😄`);

const drink = age >= 18 ? `wine 😄` : `water`;
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = `dronk`;
} else {
    drink2 = `water`;
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? `wine 😄` : `water`}`);

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// §
// Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`)