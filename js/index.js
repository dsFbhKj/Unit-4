usestrict;  //it cut out the flab and make sure it your code is right

// alert(2==2) //true

// alert(5>5)//false

// alert(4<=5)//true

console.log("w" > "W")
console.log("W" > "w")
console.log("w" == "W")

console.log(5 > 4)
console.log("apple" > "appear")
console.log("west" < "Went")
console.log(2 == "12")//not defined

//The standard form of "if" is as follows:
let conditional=true;

if(conditional == true){
    console.log('it was true');
}
else{
    console.log('it was false');
}

if(true)console.log('works');
if(0)console.log('doesnt work');

let check = 'false';
if(check) console.log('this works too');

check=5;
if(check == 5){
    console.log('TRUE')
}
else{
    console.log('FALSE')
}

let year=2022;

if (year == 2022){
    console.log('Its still this year');
}
else if(year == 2023){
    console.log('Happy new year!');
}
else{
    console.log('What year is it?');
}

// let result = (condition) ? value1 : value2; -layout
let score= 89;
age = 34;
let result = (score) ? true : false;
let canDrink = (age >= 21) ? true : false;
console.log(result)
console.log(canDrink)

// if(a + b < 4){
//     result = 'Below';
// }else{
//     result='Over';
// }

// Below= 3;
// Over= 9;
// a=2
// b=1
// let result=(a + b < 4) ? 'Below' : 'Over';
// console.log(result)

//bad example don't do
// let letterGrade = (grade > 90) ? 'A':
//     (grade > 80) ? 'B':
//     (grade > 70) ? 'C':
//     (grade > 60) ? 'D':
//     'F';

// console.log(letterGrade);

//switch conditions -template
switch (param){
    case "walk":
    //  your code here
    break;

case 'sleep':
    //your code here
case 'dream':
    //your code here
    break;
default: //else
// your code here
}

myVal= 13

switch (true){//will always run
    case (myVal >= 10):
        multiplier = 2;
        break;
    case(myVal >=0):
        multiplier = 1;
        break;
    default:
        multiplier = -1;
}
console.log(multiplier)

//question

// let message;

//     if(login == 'Employee'){
//         message = 'Hello';
//     }else if(login == 'Director'){
//         message = 'Greetings';
//     }else if(login == ''){
//         message = 'No login';
//     }else{
//         message = '';
//     }
// console.lg(message)

//correct answer-in switch statement

let message="";
let login = "Empolyee";
switch (login){
    case("Empolyee"):
    message = 'Hello';
    break;
    case('Director'):
    message = 'Greetings';
    break;
    case(''):
    message = 'No login';
    break;
    default:
        console.log(false)
        break;
}
console.log(message)

//OR statement
alert( true || true); //true
alert( false || true); //true
alert( true || false); //true
alert( false || false); //false

//example of using or(||)

if(shirt = "blue") alert("lookin' 'good");
if(shirt = "red") alert("lookin' 'good");
if(shirt = "green") alert("lookin' 'good");
if(shirt = "pink") alert("lookin' 'good");

// shirt = "blue"
// if(shirt == 'blue' || shirt == 'red' || shirt == 'green' || shirt == 'pink'){
//     console.log('lookin good');
// }

// open="weekdays"
// closed="weekends"
// if(open == true || closed == false){
//     console.log("It's only open 9am to 5pm on weekdays");
// }
let weekdays="open"
let weekends="closed"
if(weekdays == "open" || weekends == "closed"){
    console.log("It's only open 9am to 5pm on weekdays");
}

let tvOn = true;
let radioOn = true;
let computerOn = false;

if(tvOn && radioOn && computerOn){
    //see if all threee things are on
    alert(`You have too much on...
        don't waste power`);
}else{
    console.log('You have the right amount of power')
}

let x = true;
let y = false;
let z = true;
if(x && !y && z){
    console.log("Correct")
    if(x && y && z){
    console.log("InCorrect")}
}

let mapMissing = false;
let noDirections = true;
let gas = 10;

//if you gave gas, all you need is a map
//or directions. We can see if someone
//won't make it 
if(gas != 0 && (!mapMissing || !noDirections)){
    alert(`The road trip is on!`);
}

let time = true;
let games = true;
let study = true;
let breakfast = true;

if( time && !games && study && breakfast){
    console.log('Pass')
} else if (time && games && study && breakfast){
    console.log('Still Pass')
}else{
    console.log('Fail')
}

//orginally we would say 
let value = undefined;
console.log(value ?? 'this is not defined')

if(value !== null && value != undefined){
    console.log(value);
}else{
    console.log("this is undefined");
}
//Now with nullish we can just say this
console.log(value ?? 'this is not defined');

// let a = null;
// let b = undefined;
// let c = "";
// let d = 'This is the last thing';

// console.log(a ?? b ?? c ?? d);//""
// console.log(a ?? b ?? d ?? c);//if you put d before c then it print what d contains because it prints the first non null value 

let a = null;
let b = undefined;
let c = "";
let d = 'last thing';

console.log(a || b || c || d);//"last thing"

for(starting_Value; end_Condition; increment){
    //code that will be looped
}

for(let u= 0; u<=9; u++)
console.log(u);

for(let i = 1; i <= 5; i+=2){
    console.log(`this has happened ${i} times`)
}

for(let i = 1; i<=5; i++){
    console.log(`this has happened ${2*i+3} times`)
}

let i =0; //we have i already declared and assigned
for(; i<3; i++){//no need for "begin"
    console.log(i);//0,1,2
}

for(;;){
    //repeats without limits
}

// for(let i = 5; i <= 11; i+=1){
//     console.log(`this has happened ${i} times`)
// }

for(let i = 1; i <= 9; i++){
    console.log(`this is nice`)
}

for(let i= 0; i <  6; i++){
    let i = Math.floor(Math.random() * 10) + 1;
    console.log(i)
}

while(condition){
    //code
    //called "body"
}

let t = 0;
while(t < 3){// shows 0, then 1, than 2
    console.log(t);
    t++; 
}

let w = 5;
while(w){
    //when w becomes 0, the condition become falsy,
    //and the loop stops
    alert(w);
    w--;
}

let q =0;
do{
    console.log(q)
    q++;
}while (q < 3);

for (var o = 0; o < 6; o++) {
    var count = 0;
    for (var o = 0; o < Math.floor(Math.random() * 10) + 1; o++) {
        count++;
    }
    console.log(o);
}

for (var f = 0; f < 6; f++) {
    var count = 0;
    var loopEnd = Math.floor(Math.random() * 10) + 1;
    for (var f = 0; f < loopEnd; f++) {
        count++;
    }
    console.log(count);
}

// switch (x) {
//     case 'value1':
//     //if (x === 'value1')
//     ...[break]
//     case 'value2':
//     //if (x === 'value2')
//     ...[break]
//     default:
//         ...[break]
// }

var arr = [];
while(arr.length < 6){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

array = ['red', 'orange', 'yellow' , 'green'];
array[0]//red;
array[3]//green;
array[2]//is yellow;
array[2] = 'pink';
//array = ['red', 'orange' , 'pink', 'green'];
console.log(array);

let box1 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]
let box2 = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31]
let box3 = [4,5,6,7,12,13,14,15,20,21,22,23,18,29,30,31]
let box4 = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31]
let box5 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
// for(let i = 0; i < box1.length; i++){
//      box1[i].toString(2);//di this to everyone and nest the for loops for each box
//      for(let j = 0; j < box2.length; j++){
//         box2[j=box2.toString(2)];
//      }
//      for(let j = 0; j < box3.length; j++){
//         box3[j=box3.toString(2)];
//      }
//      for(let j = 0; j < box4.length; j++){
//         box4[j=box4.toString(2)];
//      }
//      for(let j = 0; j < box5.length; j++){
//         box5[j=box5.toString(2)];
//      }
// }
// console.table(box1,box2,box3,box4,box5)
console.log(box1,box2,box3,box4,box5)
console.log([i,j].toString)

array = ['red', 'orange' , 'yellow', 'green'];
console.log(array.length);//returns the value 4; it start counting at 1

array= ['red', 'orange', 'yellow' , 'green'];
array.length = 2;
console.log(array);//'red', 'orange'

for(let i = 0; i < array.length; i++){}
//This is the standard way of doing things. It is effective code and gives great understanding to others. This method combine both methods.
for(let item of array){}//represents each #; item doesn't exist without the for; has no impact in the for loop; item can't be used as the number in the for just use for.
//This the monderen way of handling it and is an accepted way of handling looping
for(let i in array){}
//Don't use this, it only uses numerical values

for(let i = 0; i < array.length; i++){
    array[i] *=3;
}
// for(let i = 0; i < box1.length; i++){
//     box1[i] *=3;
// }
function functionName(parameters){
    //function body
}

    function checkAge(age) {
        if (age >= 18) {
            return true;
        } else {
            return confirm('Do you have permission from your parents?');
        }
    }
    age = prompt('How old are you', 18);

    if (checkAge(age)) {
        alert('Access granted');
    } else {
        alert('Access denied');
    }

    let sum = 0;
    let amount = 0;

    while (true) {
        let value = +prompt(`Eneter a test score: `, `leave blank if done`);
        if (!value) break;
        sum += value;
        amount++
        console.log(sum)
    }

// function Add (a,b);
// return (a+b);

// function slope (mx,b);
// return (mx+b);

// function slope (a,b)
// console.log(slope)

function showMessage(from, text) {//arguments: from, text
    console.log(from + ': ' + text);
}

showMessage('Anne', 'Hello!');//Anne: Hello! (*)
showMessage('Anne', "What's up?")// Anne: What's up (**)

function thirteen(a){
    // document.getElementById('description').text = 'Georgie is cool'
    document.getElementById('description').innerHTML = 'Javascript is challenging'
    document.getElementById('description').style.color = 'blue'
    document.getElementById('img').src = 'love.png'
    
    for(let a= 0; a <  6; a++){ // I put i as 0 and set a limit to 6 that would loop
    let a = Math.floor(Math.random() * 10) + 1; // Then I did Math.floor and Math.random so I and get a randomzied whole number *10 and then add the whole thing but 1
    console.log(a)//print out my numbers
}
    // console.log([a]*4 + 13);
}
thirteen(4);

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

        // take the input from the user
    let number = prompt('Enter the number: ');

    let solved = Math.sqrt(number);
    console.log(`The square root of ${number} is ${result}`);

// function yourMessage(){
//     //local variable 
//     var message = ("Hello, I'm Javascript");
//     console.log(message)
// }
// message("Hello, I'm Javascript");

let username = 'John';

function showMessage(){
    username = 'Bob'; //(1) changed the outer var
    let message = 'Hello, ' + username;
    console.log(message);
}
console.log(username);//John befire the function call
showMessage();
console.log(username);//Bob, the value was modifeied by the function

// let output = calcPower(3, 5); //output == 243

function add(num1,num2){
    return
}
add()

function calcPower(base, power){
    return base**power
    // return (base**power)
}
console.log(calcPower(3,5))
console.log(calcPower(9,7))

function checkAge(age){
    if (age >= 18){
        return true;
    }else {
        return confirm('Do you have permission from your parents?');
    }
}
let age = prompt('How old are you', 18);

if (checkAge(age)){
    alert('Access granted');
}else{
    alert('Access denied');
}

function findMin(a, b, c){
    return minimum = Math.min(a, b, c);
}
console.log(Math.min(12, 45, 2))

function calcPower(num1, power){
    for(let p = 0; p < power; p++){
        console.log(num1**(p+1))
    }

    return num1**power

}

calcPower(3,5);

function sayHi(name, text){
    console.log(sayHi(name,text)); //the same but in func
}//declaration

//recursion

sayHi = function(name,text){
    console.log(sayHi(name,text)); //the same but in var of sorts
}//expression

//this works
doStuff()
function dostuff(){}

// let sum = function(a, b){
//     return a + b;
// }// the statement has already been declared, expression form
// //is the same as
// let sum = (a, b) => a + b;
// // let sum = (a, b) => {a + b};// for multiple lines of code

sum = function(a, b){
    return a + b;
}
//is the same as, the expression form
sum = (a, b) => a + b;
// let sum = (a, b) => {a + b};

sum = (a, b) => {
    let result = a + b; //these are the expresssion form
    return result
}

console.log(sum(3,5));

/* <input type='text' id='input'>
    document.getElementById('input')  //HTML ; text to go in the box 
</input>
document.getElementById('input')
document.getElementById('input').value; // save what ever they type in */
// document.getElementById('input').textContent = 'New Text'

document.getElementById('input').value = 'New Text'

//hoisting is like a call func; a set way func a rule then it refesnces the rule.
add(2,4)
function add(num1,num2){
    return num1 + num2
}
console.log(add)

let name = 'Georgiana'
let fname = name.substring(3)//rgiana
(0,7)//Georgia

[2,4,6,8,10,1]//filter removes or aguments
//.map lets you affecta a function to each one of them.

