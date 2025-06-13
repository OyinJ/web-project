// Day 2
// Data type using typeof function
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof null);

const firstName='Oyinkansola';
const lastName='Fasina';

console.log(firstName + ' '+ lastName);


//Day 4
//Comparison Operators
const weightjack = 78;
const heightjack = 1.69;
const weightjill = 92;
const heightjill = 1.95;

const BMIjack = weightjack/heightjack ** 2;
const BMIjill = weightjill/heightjill ** 2;
const jackHigherBMI = BMIjack > BMIjill;
console.log(BMIjack,BMIjill, jackHigherBMI);
console.log( `Jack's weight, height are  ${weightjack} , ${heightjack} respestively  whose BMI is ${BMIjack} has the higher than BMIjack's BMI  is ${BMIjill}`);
console.log(`Jill whose BMI is ${BMIjill}`);

const dob =2004;
const year = 2026;
const details = `I am ${firstName} ${lastName}, I will be graduating ${year} at the age of ${year- dob}`;
console.log(details);

// Condition
const age=15;
if (age >=18){
    console.log("You are eligible to drive a car");
}
else{
    console.log(`You are not eligible to drive because your current age is ${age}. You are meant to be 18 to be eligible to drive. Kindly wait for another ${18 - age}`);
};

// Exercise 1

if (BMIjack > BMIjill){
    console.log(`Jack's BMI, ${BMIjack}, is higher than Jill's BMI, ${BMIjill}`);
}else{
    console.log(`Jill's BMI, ${BMIjill} is higher than Jack's BMI,${BMIjack}`);
}

// Day 5
// Type conversion and coercion

const inputYear = '2004';
console.log(Number(inputYear),inputYear);
console.log(inputYear + 18);
console.log(Number('oyinkansola'));

// type coercion
console.log("I am " + 21 + " years old");
console.log("23" - "10" - 3);

//Truthy or falsy value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));

const money=100;
if (money) {
    console.log("Don't Spend it all");
}
else{
    console.log("you should get a job.");
}

///Equality Oparations; == vs  ===
const testAge = "20";
if (testAge == 18){
    console.log(" You just became an adult - strict");
}
if (testAge == 18){
    console.log("You just became an adult - loser")
}

// const fav = Number(prompt("Enter your Number: "))
const fav = 23;
console.log(fav)
console.log(typeof fav);

//Nested if
if (fav == 23){
    console.log("Cool! 23 is an amazing number");
}
else if (fav === 7){
    console.log("7 is also a number");
}
else if(fav === 9){
    console.log("I don't like the number 9");
}
else{
    console.log("Number is not 23 or 9 or 7");
}

// Logical Operators (AND &&, OR ||, NOT !)
const License = true;
const Vision = true;
console.log(License && Vision);
console.log(License || Vision)
console.log(!Vision)

// Exercise 2

/* There are two gymnastics teams, GoldStars and Angels. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: GoldStars score 96, 108 and 89.Angels score 88, 91 and 110
TEST DATA BONUS 1: GoldStars score 97, 112 and 101. Angels score 109, 95 and 123
TEST DATA BONUS 2: GoldStars score 97, 112 and 101. Angels score 109, 95 and 106 */
// // kindly enter the Gold Star Team 
// // /const GoldStars1 =  Number(prompt("Enter your Gold first Number: "));
// // const GoldStars2 =  Number(prompt("Enter your Gold second Number: "));
// // const GoldStars3 = Number(prompt("Enter your Gold Third Number: "));

// Calculate the average of Gold Star Team
// let avgGold = (GoldStars1 + GoldStars2 +GoldStars3)/3;
// console.log(`The average of Angel GoldStars is ${avgGold}`);

// kindly enter the Angels Team
// const Angels1 =  Number(prompt("Enter your Angels first Number: "));
// const Angels2 =  Number(prompt("Enter your Angels second Number: "));
// const Angels3 =  Number(prompt("Enter your Angels thirdNumber: "));
// // Calculate the average of Angels Team
// let avgAngels = (Angels1 +Angels2 +Angels3)/3;
// console.log(`The average of Angels is ${avgAngels}`);

//Conditions to check if Average of Gold is greater than Average of Angels AND average of Gold is greater than 100
// if (avgGold > avgAngels && avgGold >= 100){
//     console.log(`The winner of the Gymnastics is  GoldStars Team with an average of ${avgGold}`);
// }
// //Conditions to check if Average of Angel is greater than Average of Gold AND average of Angels is greater than 100
// else if(avgAngels > avgGold && avgAngels >= 100){
//     console.log(`The winner of The gymnastics is Angels Team with an average of ${avgAngels}`);
// }
// // Conditions to check if Average of Gold is equal Average of Gold AND average of Gold is greater than 100 AND average of Angels is greater than 100
// else if(avgAngels == avgGold && avgAngels >= 100 && avgGold >= 100){
//     console.log(`We have both draw with an average of ${avgAngels}`);
// }

// else{
//     console.log("No team wins the trophy");
// }

//Statements and Expressions
const me='Horus';
console.log(`I am ${2025-2020} years old ${me}`);

// The conditional (tenery) operator
const drinkingAge = 23;

const drink = drinkingAge >= 18 ? 'wine': 'water';
console.log(drink);

// coding Challenge
// Ade wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20 %

const lip = 0.15;
let pit = Number(prompt("Enter your testing value: "));
console.log(pit);
let kit = pit * lip;
let mit = kit + pit;
if (pit >= 50 && pit <= 300){
    console.log(`The bill was ${pit}, the tip was ${kit} , The total value ${mit}`);
}
else{
    console.log(`The bill was ${pit}, the tip was ${pit * 0.20} , The total value ${(pit* 0.20)+pit }`);
}

// Condition tenary
const bill = 430;
const tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip} , The total value ${tip+ bill} `);

// Functions
function logger(){
    console.log("My name is Oyin");
}
logger();

function foodProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const juiceDrink = foodProcessor(5,1);
console.log(juiceDrink);
const num = Number("23");
console.log(typeof num);
//Types of function
// declaration function and expression function
//function declaration
function calcAge1(birthYear){
    return 2025- birthYear;
}
const age1 = calcAge1(2004);
console.log(age1);

// Function expression

const calcAge2= function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2001);
console.log(age1,age2);

//Arrow Function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 =calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age= 2025-birthYear;
    const retirement =65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years `;
}
console.log(yearsUntilRetirement(1998, "Peter"));
console.log(yearsUntilRetirement(2004, "Oyin"));

// Functions calling other function
function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, pine){
    const applesPieces = cutFruitPieces(apples);
    const pinePieces = cutFruitPieces(pine);
    const juice = `Juice with ${applesPieces} pieces of apples and ${pinePieces} pieces of pine`;
    return juice;
}
console.log(fruitProcessor(4,6));

//Excercise for week 7
/*Back to the two gymnastics teams, the goldstars and the angels! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgGoldstar' and 'avgAngels'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Angels win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Goldstars score 44, 23 and 71. Angels score 65, 54 and 49
TEST DATA 2: Goldstars score 85, 54 and 41. Angels score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores */


function calcAverage(v1,v2, v3){
    let avgGoldstar= (v1+v2+v3)/3;
    return `The Average of Goldstar is ${avgGoldstar}`;
}

function calcAverage_Angels(b1,b2,b3){
    let avg_Angels= (b1+b2+b3)/3;
    return `The Average of Angel ${avg_Angels}`;
}

function checkWinner(avg_Angels,avgGoldstar){
    if (avgGoldstar >= 2 * avg_Angels){
    console.log(`The winner of the Gymnastics is  GoldStars Team with an average of ${avgGoldstar}`);
}
else if(avg_Angels >= 2 * avgGoldstar){
    console.log(`The winner of The gymnastics is Angels Team with an average of ${avg_Angels}`);
}
else{
    console.log("No team wins the trophy");
}
}

const avgGoldstar = calcAverage(44,23,71);
const avg_Angels = calcAverage_Angels(65,54,49);
checkWinner(avg_Angels,avgGoldstar);


//ARRAYS
// Tuesday 27/05/2025
// const friend1 = "Ade";
// const friend2 = "Emake";
// const friend3 = "Peace";
// const friend4 = "Julius";
// const friends = ["Ade","emake", "peace", "julius"];
// console.log(friends);
// const y = new Array(1990, 1991, 1992);
// console.log(friends.length);// check out the length of the array
// console.log(friends[friends.length - 1]);

const calcAge=function (by){
    return 2025-by;
};
const years =[2000,2010,2005,2003, 2009,];
const ag1 = calcAge(years[0]);
console.log(ag1);
const newAges = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];
console.log(newAges);

// Basic Array Method
const members= ["Bolu", "Fire","Oyin","Tolu", "Ope"];
console.log(members);
//ADD Elements in Array
const  newLength = members.push("Ola"); // Add to the end of the array
console.log(newLength, members);
const Ket = members.unshift("Peter");//add at the start of the array
console.log(Ket, members);


// Remove Elemnents
members.pop(); // remove the last elements
console.log(members);
const poppedNumber = members.pop();
console.log(poppedNumber,members);

// Shift Method - remove the first elements
members.shift();
console.log(members);
// index means the position of the name, also note that index start from 0
console.log(members.indexOf("Oyin"));
console.log(members.indexOf("Fire"));
console.log(members);
console.log(members.includes("Bolu"));



// Exercise for the day
const calcTip = function(bills){
    return bills >=50 && bills <= 30 ? bills * 0.15 : bills * 0.2;
}

const bills =[125, 55, 444];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);