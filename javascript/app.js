// let str="ap";
// if(str[0]==='a' && str.length>3){
//     console.log("good string");
// }else{
//     console.log("not a good string");
// }

// let color="rd";
// switch(color){
//     case ("red"):
//         console.log("stop");
//         break;
//     case ("yellow"):
//         console.log("wait");
//         break;
//     case("green"):
//         console.log("go");
//         break;
//     default:
//         console.log("signal is broken");
// }

// let num=10;
// switch(num){
//     case (1):
//         console.log("monday");
//         break;
//     case (2):
//         console.log("tuesday");
//         break;
//     case (3):
//         console.log("webnesday");
//         break;
//     case (4):
//         console.log("thrusday");
//         break;
//     case (5):
//         console.log("friday");
//         break;
//     case (6):
//         console.log("saturday");
//         break;
//     case (7):
//         console.log("sunday");
//         break;
//     default:
//         console.log("day is not exist");
//         break;
// }
// alert("something is wrong!");
// let name=prompt("enter your name:");
// console.log(name);
// console.error(name);
// console.warn(name);

// let name=prompt("enter you name");
// alert(`welcome ${name} you are here to conquer the world.`)

// let num=100;
// if(num%10==0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let name=prompt("enter your name:");
// let age=prompt("enter your age:");
// let msg=`${name} is ${age} years old`;
// alert(msg);

// let Quarter=3;
// switch(Quarter){
//     case 1:
//         console.log("jan , feb, mar");
//         break;
//     case 2:
//         console.log("apr, may, jun");
//         break;
//     case 3:
//         console.log("jul, aug, sep");
//         break;
//     case 4:
//         console.log("oct, nov, dec");
//         break;
//     default:
//         console.log("invalid Quarter");
// }

// let str="abhirnna";
// if((str[0]==='a' || str[0]==='A') && str.length>5){
//     console.log("it is a golden string ");
// }else{
//     console.log("it is not a golden string");
// }

// let a=10;
// let b=192;
// let c=24;
// if(a>b && a>c){
//     console.log(a);
// }else if(b>a && b>c){
//     console.log(b);
// }else{
//     console.log(c);
// }
// let a=1234;
// let b=5;
// if(a%10===b%10){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let name="  abhirnna  ";
// console.log(name.trim());
// console.log(name);
// let name="Abhirnna Sunder Bhol";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let str="iLoveCoding";
// console.log(str.indexOf("Love"));
// console.log(str.indexOf("love"));
// console.log(str.slice(1,5));
// console.log(str.replace("Love","do"));
// console.log(str.repeat(4));

// let msg="help!";
// console.log(msg.trim().toUpperCase());

// let str="ApnaCollege";
// let msg=str.slice(4).replace('l','t');
// console.log(msg);

// let student=["abhirnna","sunny","yogesh","anurag","amit"];
// student[0]="rudra";
// student[10]="abhirnna";
// student.push("ankit");
// let s=student.pop();
// student.unshift("ankit");
// student.shift();
// console.log(student);

// jul,jun,mar,aug

// let months=["jan","jul","mar","aug"];
// months.splice(0,1);
// months.splice(1,0,"jun");
// console.log(months);
// const arr=[1,3,4,5];
// arr.push(2);

// console.log(arr);

// let nums=[[1,2],[2,3],[3,4]];
// console.log(nums);
// console.log(nums[2][1]);
// let nums=[['X',' ','O'],[' ','X',' '],['O',' ','X']];
// console.log(nums);

// let arr=[];
// if(arr.length==0){
//     console.log("arr is empty");
// }else{
//     console.log("arr is not empty");
// }
// let n=prompt("enter a number: ");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let fav="spiderman";
// let your_guess=prompt("enter a movie");
// while((your_guess!=fav)&&(your_guess!="quit")){
//     console.log("wrong");
//     your_guess=prompt("Wrong guess,enter a movie");
// }
// if(your_guess==fav){
//     console.log("win");
// }else{
//     console.log("you quit");
// }

// let arr=[["spiderman","ironman","thor"],["superman","wonder woman","batman"],["chota bheem","roll_no_21","shiva"]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }
// for(heroes of arr){
//     for(names of heroes){
//         console.log(names);
//     }
// }
// for(names of arr){
//     console.log(names);
// }
// for(char of "abhirnna"){
//     console.log(char);
// }

//to do list //list,add,delete,quit
// let arr=[];
// let req=prompt("enter a req");
// while(true){
//     if(req=="quit"){
//         console.log("quit to do");
//         break;
//     }else if(req=="add"){
//         let add=prompt("add in to do");
//         arr.push(add);
//         console.log("updated to do list")
//     }else if(req=="list"){
//         console.log("--------------");
//         for(let i=0;i<arr.length;i++){
//             console.log(arr[i]);
//         }
//         console.log("--------------");
//     }else if(req=="delete"){
//         let del=prompt("enter index number");
//         arr.splice(del,1);
//         console.log("deleted");
//     }else{
//         console.log("invalid req");
//     }
//     req=prompt("enter a req");
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// number=287152,count=6
// let number=String(287152);
// let count=0;
// for(char of number){
//     count++;
// }
// console.log(count);

// number=287152,sum=25
// let number=String(287152);
// let sum=0;
// for(let i=0;i<number.length;i++){
//     sum=sum+Number(number[i]);
// }
// console.log(sum);

// let num=prompt("enter a number: ");
// let factorial=1;
// while(num!=0){
//     factorial=factorial*num;
//     num=num-1;
// }
// console.log(factorial);

// let arr=[23,34,56,78,98];
// let maximum=-Infinity;
// for(let i=0;i<arr.length;i++){
//     if(maximum<arr[i]){
//         maximum=Math.max(maximum,arr[i]);
//     }
// }
// console.log(maximum);

// Qs3.Write a JS program of find the sum of digits in a number
// Example: number = 287152, sum = 25

// let number=287152;
// let copy=number;
// let sum=0;
// while(copy>0){
//     let last_digit=copy%10;
//     sum=sum+last_digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);
// let number=287152;
// let copy=number;
// let count=0;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// const student={
//     name:"abhirnna",
//     age:20,
//     marks:100
// };
// const post={
//     username:"abhirnna",
//     content:"this is my first post",
//     likes:16,
//     reposts:2,
//     tags:["apnacollege","delta","vit"],
//     1:'a',
//     true:'b',
//     null:'c',
//     undefined:'d'
// };
// console.log(post["username"]);
// console.log(post[1]);
// console.log(post["true"]);
// console.log(post["null"]);
// console.log(undefined);
// console.log(post.true);
// console.log(post.username);

// const student = {
//     name:"abhirnna",
//     marks:97,
//     rollno:21
// };

// const student={
//     abhirnna: {
//         grade:'A',
//         city:"Rohini"
//     },
//     sunny: {
//         grade: "A+",
//         city:"Nayabas"
//     },
//     amit: {
//         grade:"O",
//         city:"Narela"
//     }
// };

// const student=[
//     {
//         name:"abhirnna",
//         grade:"A"
//     },
//     {
//         name:"sunny",
//         grade:"A"
//     },
//     {
//         name:"amit",
//         grade:"O"
//     }
// ];
// console.log(student[0].name);

// console.log(Math.PI);
// console.log(Math.pow(2,4));
// console.log(Math.floor(-5.6));
// console.log(Math.ceil(5.6));
// console.log(Math.random());

// let num=Math.floor(Math.random()*10)+1;
// console.log(num);

// let num=Math.floor(Math.random()*100)+1;
// console.log(num);

// let num=prompt("enter a max_number: ");
// let goal=Math.floor(Math.random()*num)+1;
// let find=prompt("enter a number: ");
// let count=1;
// while(goal!=find){
//     if(find<goal){
//         find=prompt("your guess is less than goal");
//     }else{
//         find=prompt("your guess is greater than goal");
//     }
//     count++;
// }
// if(find==goal){
//     console.log(`congralts you guess the number , you take ${count} times`);
// }

// Create a program that generates a random number represent in a dice roll.
// [The number should be between 1 and 6]
// let dice=Math.floor((Math.random()*6))+1;
// console.log(dice);

// Q2. Create an object representing a car that stores the following properties:
// name
// model
// color

// Then, print the car’s name.

// const car={
//     name:"BMW",
//     model:"M4",
//     color:"yellowish-green"
// }
// console.log(car.name);

// Q3. Create an object Person with the following properties:
// name
// age
// city
// Then:
// Change the original value of city to "New York".
// Add a new property country and set its value to "United States".

// const Person={
//     name:"abhirnna",
//     age:20,
//     city:"los angeles"
// }
// console.log(Person);
// Person.city="New York";
// Person.country="United States";
// console.log(Person);

// function hello(){
//     console.log("hello");
// }
// hello();

// function poem(){
//     console.log("Twinkle, twinkle, little star,");
//     console.log("How I wonder what you are!")
// }
// poem();

// function dice(){
//     console.log(Math.floor((Math.random()*6))+1);
// }
// dice();

// function personalInfo(name,age){
//     console.log(`${name} 's age is ${age}`);
// }
// personalInfo("abhirnna",19);

// function average(num1,num2,num3){
//     console.log((num1+num2+num3)/3);
// }
// average(1,2,3);

// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(1,2));

// function sum(num){
//     let summation=0;
//     for(let i=1;i<=num;i++){
//         summation=summation+i;
//     }
//     return summation;
// }
// console.log(sum(10));

// function newString(arr){
//     let name="";
//     for(let i=0;i<arr.length;i++){
//         name=name+arr[i];
//     }
//     return name;
// }
// let arr=['a','b','h','i','r','n','n','a','1','2'];
// console.log(newString(arr));

// let sum=10;// global scope
// function findSum(num1,num2){
//     let sum=num1+num2; //function scope
//     console.log(sum);
// }
// findSum(1,2);
// console.log(sum);

// let greeting=function(num1,num2){
//     return num1+num2;
// }
// greeting=function(){
//     return 5;
// }
// console.log(greeting);

// function multipleGreet(fun,n){
//     for(let i=1;i<=n;i++){
//         fun();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// console.log(multipleGreet(greet,3));

// function oddOrEven(request){
//     if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
// }
// let fun=oddOrEven("even");
// console.log(fun(4));

// const calculator={
//     add(num1,num2){
//         return num1+num2;
//     },
//     sub(num1,num2){
//         return num1-num2;
//     },
//     mul(num1,num2){
//         return num1*num2;
//     },
//     div(num1,num2){
//         return num1/num2;
//     }
// };
// console.log(calculator.div(4,3));

// Write a JavaScript function that takes an array of numbers and a number as arguments, and returns a
//  new array containing only the elements that are greater than the given number.

// function setOfGreaterElement(num,arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(num<arr[i]){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };
// let arr=[12,34,21,45,6,7,18];
// let nArr=setOfGreaterElement(20,arr);
// for(let i=0;i<nArr.length;i++){
//     console.log(nArr[i]);
// }

// Write a JavaScript function that takes a string as input and returns a new string
//  containing only the unique characters from the given string.
// Input:  str = "abcdabcdefgggh"
// Output: "abcdefgh"

// function uniqueString(str){
//     let ans="";
//     for(let i=0;i<str.length;i++){
//         let store=str[i];
//         if(ans.indexOf(store)==-1){
//             ans=ans+str[i];
//         }
//     }
//     return ans;
// }
// let str="abcdabcdefgggh";
// console.log(uniqueString(str));

// Write a JavaScript function that accepts an array of country names as input and returns 
// the country name with the greatest length.
// Input:
// country = ["Australia", "Germany", "United States of America"]
// Output:
// "United States of America"

// function longestString(country){
//     let count=0;
//     let ans="";
//     for(let i=0;i<country.length;i++){
//         if(count<country[i].length){
//             count=country[i].length;
//             ans=country[i];
//         }
//     }
//     return ans;
// }
// let country=["Australia","Germany","United States of America"];
// console.log(longestString(country));

// Write a JavaScript function that accepts a string as input and returns the total number of 
// vowels present in the string.

// function findVowel(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i].toLowerCase()=='a' || str[i].toLowerCase()=='e' || str[i].toLowerCase()=='i' || str[i].toLowerCase()=='o' || str[i].toLowerCase()=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// let str="hello World oO";
// console.log(findVowel(str));

// Write a JavaScript function that generates and returns a random integer within a given range, 
// including both the starting and ending values.

// function randomNumberGenerate(st,end){
//     let a=end-st+1;
//     let ans=Math.floor(Math.random()*(a))+st;
//     return ans;
// }
// console.log(randomNumberGenerate(12,17));

// const student={
//     math:97,
//     science:98,
//     computer:99,
//     getAvg(){
//         let avg=(this.math+this.science+this.computer)/3;
//         console.log(avg);
//     }
// }
// console.log(student.getAvg());

// console.log("hello");
// try{
//     console.log(a);
// }catch(err){
//     console.log("err found");
// }
// console.log("abhirnna");

// const sum=(a,b)=>(
//     a+b
// );
// console.log(sum(6,2));

// function greet(){
//     console.log("abhirnna");
// }
// console.log("hi there");
// setTimeout(greet,4000);
// console.log("welcome");

// let id=setInterval(()=>{
//     console.log("hello");
// },1000);

// const store={
//     name:"Abhirnna",
//     class:12,
//     getInfo:function(){
//         console.log(this); //object
//     },
//     getInfo1:()=>{
//         console.log(this);//global
//     },
//     getInfo2:function(){
//         setTimeout(()=>{
//             console.log(this); //object
//         },2000)
//     },
//     getInfo3:function(){
//         setTimeout(function(){
//             console.log(this); //global
//         },2000)
//     },
// }

// let id=setInterval(()=>{
//     console.log("hello World")
// },2000)
// setTimeout(()=>{
//     clearInterval(id);
// },10000)

// Q1. Write an arrow function named arrayAverage that accepts an array of numbers and returns
//  the average of those numbers.

// const arrayAverage=(arr)=>{
//     let aSum=0;
//     let size=arr.length;
//     for(let i of arr){
//         aSum=aSum+i;
//     }
//     return aSum/size;
// }
// let arr=[97,98,99,100];
// console.log(arrayAverage(arr));

// const isEven=(n)=>{
//     if(n%2==0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// };
// isEven(2);


// const object = {
//     message:'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,2000);

// let length = 4;
// function callback(){
//     console.log(this.length); //global 
// }
// const object = {
//     length:5,
//     method(callback){
//         callback(); //global 
//     },
// };
// object.method(callback,1,2);
// function name(str){
//     console.log(str);
// }
// let str="abhirnna";
// name("abhirnna",5);

// const arr=[1,2,3,4,5];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);
// arr.forEach((el)=>{
//     console.log(el);
// });
// arr.forEach(function(el){
//     console.log(el);
// });

//map

// const marks=[8.89,9.02];
// const gpa=marks.map((el)=>{
//     return el*10;
// });
// console.log(gpa);

//filter

// const number=[1,2,3,4,5,6,7,8,9];
// const even=number.filter((el)=>{
//     return el%2==0;
// });
// console.log(even);

// const arr=[1,2,3,4];
// let n=arr.every((el)=>{
//     return el%2==0;
// });
// console.log(n);
// const arr=[2,4];
// let n=arr.every((el)=>{
//     return el%2==0;
// });
// console.log(n);
// const arr=[1,3];
// let n=arr.some((el)=>{
//     return el%2==0;
// })
// let arr=[1,2,3,4];
// let store=arr.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// },0);
// console.log(store);

// let arr=[1,2,3,8,4,5,6,7,2];
// let store=arr.reduce((res,el)=>{
//     if(res>el){
//         return res;
//     }else{
//         return el;
//     }
// });
// console.log(store);

// let arr=[10,2,30,40,50,60,70,80,90,100];
// let n=arr.every((el)=>{
//     return el%10==0;
// })
// console.log(n);

// let arr=[1,2,3,4,5,6,7];
// let store=arr.reduce((res,el)=>{
//     if(res<el){
//         return res;
//     }else{
//         return el;
//     }
// });
// console.log(store);

// function sum(a,b=1){
//     return a+b;
// }
// console.log(2);

// let arr=[1,2,3,4,5];
// console.log(Math.min(...arr));
// let str="Abhirnna";
// console.log(...str);

// let arr=[1,2,3,4,5,6];
// let newArr=[...arr];
// console.log(newArr);
// let str="hello";
// let strArr=[...str];
// console.log(strArr);

// let obj={
//     name:"Abhirnna",
//     cgpa:8.89,
// };
// let copyObj={
//     ...obj,id:123
// };
// console.log(copyObj);
// let arr=[1,2,3,4];
// let o={
//     ...arr
// };
// console.log(o);

// function sum(...ag){
//     for(let i=0;i<ag.length;i++){
//         console.log(ag[i]);
//     }
// }
// sum(1,2,3,4);

// function sum(...args){
//     return args.reduce((res,el)=>{
//         return res+el;
//     });
// }

// function min(...args){
//     return args.reduce((res,el)=>{
//         if(res<el){
//             return res;
//         }else{
//             return el;
//         }
//     });
// }

// const obj={
//     name:"abhirnna",
//     class:9,
//     subject:["hindi","english","maths","science"],
//     password:"abhirnna.bhol@gmail.com"
// };
// let {name:user, password:secret="abh"}=obj;

// Qs1. Square and sum the array elements using the arrow function and then find the 
// average of the array.

// let average=((arr)=>{
//     return arr.reduce((res,el)=>{
//         return (res)+(el)**2;
//     },0);
// });
// const arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(average(arr)/arr.length);

// Q2. Create a new array using the map() function such that each element of the new array is equal to
//  the corresponding element of the original array plus 5.

// const arr=[1,2,3,4,5,6,7,8,9,10];
// const nArr=arr.map((el)=>{
//     return el+5;
// });

// Q3. Create a new array whose elements are the uppercase versions of the words present in the original 
// array.
// let arr=['h','e','l','l','o'];
// let nArr=arr.map((el)=>{
//     return el.toUpperCase();
// });

// Q4. Write a function called doubleAndReturnArgs that accepts an array and a variable number of 
// arguments. The function should return a new array containing the original array values and all the
//  additional arguments doubled.
// let doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((el)=>{
//         return el**2;
//     })
// ];
// let arr=[1,2,3,4,5,6];
// console.log(doubleAndReturnArgs(arr,1,2,3,4,5,6));

// Q5. Write a function called mergeObjects that accepts two objects and returns a new object containing 
// all the keys and values from both the first and second objects.

// let mergeObjects=(first,second)=>{
//     return{...first,...second};
// };

// let first={
//     user:"abhirnna",
//     years:20
// };
// let second={
//     name:"nikita",
//     age:21
// };
// console.log(mergeObjects(first,second));
