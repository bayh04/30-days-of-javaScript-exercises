//Exercise: Level 1;

/*var challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(' '));

var second = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
 console.log(second.split(', '));
 
 console.log(challenge.replace('JavaScript', 'Python'));
 console.log(challenge.charAt(15));
 console.log(challenge.charCodeAt(11));
 console.log(challenge.indexOf('a'));
 console.log(challenge.lastIndexOf('a'));

 var word = 'You cannot end a sentence with because because because is a conjunction'
 console.log(word.indexOf('because'));
 console.log(word.lastIndexOf('because'));
 console.log(challenge.trim());
 console.log(challenge.repeat(2));
 console.log(challenge.match(/a/gi));

 //Exercise: Level 2;

 console.log(typeof ('10'));
 console.log(+'10'===10);
 console.log(Math.ceil(parseFloat('9.8'))===10);
 console.log('python'.includes("on"));
 console.log('jargon'.includes("on"));

 var string = 'I hope this course is not full of jargon'
 console.log(string.includes("jargon"));

 var randomNumber = Math.floor(Math.random()*101);
 console.log(randomNumber);

 var randomNumber = Math.floor(Math.random()*256);
 console.log(randomNumber);

 var check = 'JavaScript';
 var randomNumber = Math.floor(Math.random()*10)
 console.log(check[randomNumber] , randomNumber);

 console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'); 

 console.log(word.substr(word.indexOf('because'), 23));

 //Exercise: level 2:

 let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
  let words = (text.replace(/[^a-zA-Z0-9 ]/g, '')).split(' ');
  console.log(words);
  console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const Modify = shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('sugar');
console.log(shoppingCart);


shoppingCart.splice(4,1);
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
console.log(Math.max(...ages));
//console.log(Math.max(19,22, 19, 24,20,25, 26, 24, 25,24));

const newArr = [];
for(let i = 0; i<=4; i++){
  const genNum = Math.floor(Math.random()*101);
  
  newArr.push(genNum);
  
}

console.log(newArr);


const anoArr = [];
for(let i = 0; i<=4; i++){
  const genNum = Math.floor(Math.random()*101);
  
  anoArr.push(genNum);
  
}

console.log(anoArr);

//Day 3: Exercises
//Exercises: Level 1

const firstName = 'Adesola';
const lastName = 'Adesina';
const country = 'Nigeria';
const city = 'Ibadan';
const age = 28;
const isMarried = true;
const year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10'===10);
console.log(parseInt('9.8')===10);

//omission here

4>3 && 10<12 //true
4>3 && 10>12 //false
4>3 || 10<12 //true
4>3 || 10>12 // true
!(4>3) //false
!(4<3) //true
!(false) //true
!(4>3 && 10<12) //false
!(4>3 && 10>12) //true
!(4==='4') //true
console.log(!('dragon'.includes('on') && 'python'.includes('on')));

const time = new Date();
console.log(time);

const yearNow = time.getFullYear();
  console.log(year);

const monthNow = time.getMonth();
 console.log(monthNow);

 //const todayDate = time.getDay();
 //console.log(todayDate);

//const todayDay = time.getDay();
 //console.log(todayDate);

 let base = prompt('Enter base: ');
 let height = prompt('Enter height: ');

 //let b = Number(base);
 //let h = Number(height);

 let area = 0.5*b*h;

 console.log('The area of the triangle is ', area);


 //let sideA = prompt('Enter side a: ');
 //let sideB = prompt('Enter side b: ');
 //let sideC = prompt('Enter side c: ');

 let a = Number(sideA);
 let br = Number(sideB);
 let c = Number(sideC);

 let perimeter = a+br+c;

 console.log('The perimeter of the triangle is ', perimeter);

let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;

let m = (y2-y1)/(x2-x1);

console.log(m);

let workTime = prompt('Enter hours: ');
let workRate = prompt('Enter rate per hour: ');

let hr = Number(workTime);
let rph = Number(workRate);

let earning = hr*rph;

console.log('Your weekly earning is ', earning);


let name = prompt('Enter your name: ');
if(name.length>7){
  console.log('Your name is long');
}

else{
  console.log('Your name is short');
}


let myName = prompt('Enter your first name: ');
let famName = prompt('Enter your family name: ');
if(myName.length>famName.length){
  console.log('Your  first name ', myName, ' is longer than your family name ', famName);
}

else{
  console.log('Your  family name ', famName, ' is longer than your first name ', myName);
}

let birthYear = prompt('Enter your birth year: ');
let thisYear = 2022;
let drivingAge = 18;
let checkAge = thisYear - (+(birthYear));
let 

if(checkAge>=drivingAge){
  console.log('You are old enough to drive');
}
else{
  console.log('You are ', checkAge, ' you will be allowed to drive after ', drivingAge-checkAge, ' years');
}


//Exercise chapter 4: Level 1

let myAge = 20;
let askAge = prompt('Enter your age: ');
let yourAge = Number(askAge);
if(myAge>yourAge){
  let ageDiff = myAge - yourAge;
  console.log("I'm ", ageDiff, " older than you.");
}

else{
  ageDiff = yourAge - myAge;
  console.log("you are ", ageDiff, " older than me.");
}

//let a = 4;
//let b = 3;

if(a>b){
  return 'a is greater than b'
}
else{
  return 'a is less than b'
}

//let a = 4;
//let b = 3;

(a>b)? console.log('a is greater than b'): console.log('a is less than b');

let askNumber = prompt('Enter a number: ');
let val = +(askNumber);
let isEven = val%2===0;
if(isEven){
  console.log(val, ' is an number');
}

else{
  console.log(val, ' is an odd number');
}*/

//Level 2

//let dateName = prompt('what is the day today?: ');
//let day = /dateName/gi
//let tym = new Date();
//let gettingDay = tym.getDay();
//if(gettingDay<=5){
  //console.log(dateName, ' is a working day');
//}
//else{
  //console.log(dateName, ' is a weekend');
//}

//console.log(gettingDay);

//Exercise chapter 5
//Level 2:
//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = (text.replace(/[^a-zA-Z0-9 ]/g, '')).split(' ');
console.log(words);
console.log(words.length);
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const Modify = shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('sugar');
console.log(shoppingCart);


shoppingCart.splice(4,1);
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);
//4
const countries = ['Albania', 'Bolivia', 'canada',
'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary',
'Ireland', 'Iceland', 'Japan', 'Kenya'];

if(countries.includes('Ethiopia')){
  console.log('Ethiopia'.toUpperCase());
}
else{
  countries.push('Ethiopia');
  console.log(countries);
  
}
//5
const webTechs = ['HTML', 'CSS', 'JavaScript',
'React', 'Redux', 'Node', 'MongoDB'];
if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess');
}
else{
  webTechs.push('Sass');
  console.log(webTechs);
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Level 3:

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const newAges = ages.sort();
console.log(ages);
console.log(Math.min(...ages));
console.log(Math.max(...ages));
//console.log(Math.max(19,22, 19, 24,20, 25, 26, 24, 25,24));

//finding the median age:
if(newAges.length%2===0){
  console.log((newAges[(newAges.length/2)-1] + newAges[(newAges.length/2)])/2);
}
else{
  console.log(newAges[((newAges.length-1)/2)]);
}

//average age:
let sum = 0;
for(let i = 0; i<newAges.length; i++){
  sum+=newAges[i];
}
console.log(sum);
let average = sum/newAges.length;
console.log(average);

//Range
console.log(Math.max(...ages)-Math.min(...ages));

//console.log(abs().Math.max(...ages)-average===abs().Math.min(...ages)-average);

console.log(countries.slice(0,10));

if(countries.length%2===0){
  console.log((countries[(countries.length/2)-1], ' and ', countries[(countries.length/2)]));
}
else{
  console.log(countries[((countries.length-1)/2)]);
}

//number 3:
let subCountries1 = [];
let subCountries2 = [];
if(countries.length%2===0){
  
  for(let i=0; i<countries; i++){
    subCountries1.push(countries.slice(0,countries.length/2));
    subCountries2.push(countries.slice(countries.length/2));
    
  }

  console.log(subCountries1);
  console.log(subCountries2);

}
else{
  for(let i=0; i<countries; i++){
    subCountries1.push(...countries.slice(0,(countries.length/2)-1));
    //subCountries2.push(...(countries.slice(countries.length/2)));
  
}

console.log(subCountries1.push('Nigeria'));
console.log(subCountries1);
}



//Exercise Day 6
//Level 1
//1

//for(let k = 0; k<=10; k++){
 // console.log(k);
//}

//for(let i = 10; i>=0; i--){
//  console.log(i);
//}

let hash = '#';
let hashArr = [];
for(let j = 1; j<=7; j++){
  hashArr.push(hash);
  console.log(hashArr.join(''));
  
}

for(let i = 0; i<=10; i++){
   console.log(i, "*" , i, " = ", i*i);
}

//for(let i = 0; i<=100; i++){
  //if(i%2===0){
    //console.log(i)
  //}
  
//}

//for(let i = 0; i<=100; i++){
  //if(i%2===1){
    //console.log(i)
  //}
  
//}

let sumEven = 0;
for(let i = 0; i<=100; i++){
  if(i%2===0){
    sumEven+=i;
    
  }
  
}
console.log(sumEven);

let sumOdd = 0;
for(let i = 1; i<=100; i++){
  if(i%2===1){
    sumOdd+=i;
    
  }
  
}
console.log(sumOdd);

//number 13
//const newArr = [];
//for(let i = 0; i<=4; i++){
//const genNum = Math.floor(Math.random()*101);

//newArr.push(genNum);
//}

//console.log(newArr);

//number 14
const anoArr = [];
for(let i = 0; i<=4; i++){
  const genNum = Math.floor(Math.random()*101);

  anoArr.push(genNum);
  if(anoArr[i]===anoArr[i++]){
    continue;
  anoArr.push(genNum);

}

}

console.log(anoArr);

//number 15



//Exercises: Level 2

//number 4: capitalizing the elements in an array
capCount = [];
for(let i = 0; i<countries.length; i++){
  countArr = countries[i].toUpperCase();
  capCount.push(countArr);
}

console.log(capCount);

//number 5
countLen = [];
for(let i = 0; i<countries.length; i++){
  countArr = countries[i].length;
  countLen.push(countArr);
}

console.log(countLen);


//number 6
arrArr = [];
for(let i = 0; i<countries.length; i++){
  subArr = [];
  countArr = countries[i].length;
  tr3Char = countries[i].substring(0,3);
  tr3CharUp = tr3Char.toUpperCase();

  subArr.push(countries[i],tr3CharUp,countArr);
  console.log(arrArr.push(subArr));
}


console.log(arrArr);

//number 7
landArr = [];
for(let j = 0; j<countries.length; j++){
  if(countries[j].includes('land')){
    landArr.push(countries[j]);
  
  }   
}
console.log(landArr);
