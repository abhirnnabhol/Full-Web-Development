// let para=document.createElement('p');
// para.innerText="hey i am red";
// let body=document.querySelector("body");
// body.append(para);
// para.style.color="red";
// let head3=document.createElement('h3');
// head3.innerText="hey i am blue";
// let body=document.querySelector('body');
// body.append(head3);
// head3.classList.add("blue");
// let body=document.querySelector("body");
// let div=document.createElement("div");
// let head1=document.createElement("h1");
// let p=document.createElement("p");
// head1.innerText="I'm in a div";
// p.innerText="ME TOO!";
// body.append(div);
// div.append(head1);
// div.append(p);
// div.classList.add("bor");

// Q. Create a new <input> element and a <button> element on the page using 
// JavaScript only. Set the text of the button to "Click me".

// let body=document.querySelector('body');
// let inp=document.createElement('input');
// let btn=document.createElement('button');
// btn.innerText='Click me';
// inp.placeholder="enter here: ";
// body.append(inp);
// body.append(btn);

// Q2. Add the following attributes to the elements:
// Change the placeholder value of the input element to "username".
// Change the id of the button element to "btn".

// let body=document.querySelector('body');
// let inp=document.createElement('input');
// inp.placeholder="username";
// let btn=document.createElement('button');
// btn.innerText='Click me';
// btn.id="btn";
// body.append(inp);
// body.append(btn);

// Q3. Access the button using querySelector() and the button's id. Change the
//  button's background color to blue and its text color to white.

// let body=document.querySelector("body");
// let btn=document.createElement("button");
// btn.id="btn";
// btn.innerText="Click Me!";
// body.append(btn);
// let choose=document.querySelector("button");
// let choosen=document.querySelector("#btn");


// Q4. Create an <h1> element on the page and set its text to "DOM Practice". 
// Underline the text and change its color to purple.

// let body=document.querySelector("body");
// let h1=document.createElement("h1");
// h1.innerText="DOM Practice";
// h1.classList="sty";
// body.append(h1);

// Q5. Create a <p> element on the page and set its text to "Apna College Delta 
// Practice", where "Delta" should be in bold.

let body=document.querySelector("body");
let para=document.createElement('p');
para.innerHTML="Apna College <b>Delta</b> Practice";
body.append(para);