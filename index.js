// alert(2==2) //true

// alert(5>5)//false

// alert(4<=5)//true

console.log("w" < "W")
console.log("w" > "W")
console.log("w" == "W")

console.log(5 > 4)
console.log("apple" > "appear")
console.log("west" < "Went")
console.log(2 == "12")

//The stabdard form of "if" is as follows:
conditional=true;

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

year=2022;

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
score= 89;
age= 34;
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

// myVal= 13

// switch (true){//will always run
//     case (myVal >= 10):
//         multiplier = 2;
//         break;
//     case(myVal >=0):
//         multiplier = 1;
//         break;
//     default:
//         multiplier = -1;
// }
// console.log(myVal)

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

let message;
let login = "Empolyee"
switch (login){
    case('Employee'):
    message = 'Hello';
    break;
    case('Director'):
    message = 'Greetings';
    break;
    case(''):
    message = 'No login';
    break;

default:
    break;
}
console.log(login)

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
}

let x = true;
let y = false;
let z = true;
if(x && !y && z){
    console.log("Correct")
    if(x && y && z){
    console.log("Correct")}
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