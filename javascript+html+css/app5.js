// let url="https://catfact.ninja/fact";
// fetch(url)
// 	.then((res)=>{
// 		return res.json();
// 	})
// 	.then((data)=>{
// 		console.log("fact1 is ",data);
// 		return fetch(url);
// 	})
// 	.then((res)=>{
// 		return res.json();
// 	})
// 	.then((data)=>{
// 		console.log("fact2 is ",data);
// 	})
// 	.catch((error)=>{
// 		console.log("Error is ",error);
// 	})

// let url="https://catfact.ninja/fact";
// async function fact(){
// 	let res1=await fetch(url);
// 	let data1=await res1.json();
// 	console.log("fact1 is",data1);
// 	let res2=await fetch(url);
// 	let data2=await res2.json();
// 	console.log("fact1 is",data2);
// }

// let url="https://catfact.ninja/fact";
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
// 	let res=await newFact();
// 	let p=document.querySelector("#result");
// 	p.innerText=res;
// });
// async function newFact(){
// 	let fact=await axios.get(url);
// 	console.log(fact);
// 	return fact.data.fact;
// };

// let url="https://dog.ceo/api/breeds/image/random";
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
// 	let imgLink=await randomImg();
// 	let img=document.querySelector("img");
// 	img.setAttribute("src",imgLink);
// });
// async function randomImg(){
// 	try{
// 		let img=await axios.get(url);
// 		return img.data.message;
// 	}catch(error){
// 		return "error";
// 	}
// }

// let url = "https://icanhazdadjoke.com/";
// async function jokes() {
// 	try {
// 		const config = { headers: { Accept: "application/json" } };
// 		let j = await axios.get(url,config);

// 		console.log(j.data);
// 	} catch {
// 		console.log("error");
// 	}
// };




// let url="http://universities.hipolabs.com/search?name=";
// let country="";
// let btn=document.querySelector("button");
// function show(CollArr){
// 	let ul=document.querySelector("#result");
// 	ul.innerText="";
// 	for(coll of CollArr){
// 		let li=document.createElement("li");
// 		li.innerText=coll.name;
// 		ul.appendChild(li);
// 	}
// }
// btn.addEventListener("click",async ()=>{
// 	let input=document.querySelector("input").value;
// 	country=input;
// 	let CollArr=await collName();
// 	show(CollArr);
// });
// async function collName(){
// 	try{
// 		let res=await axios.get(url+country);
// 		return res.data;
// 	}catch(error){
// 		return [];
// 	}
// }

// let url="http://universities.hipolabs.com/search?name=";
// let country="";
// let btn=document.querySelector("button");
// function show(collArr){
// 	let ul=document.querySelector("ul");
// 	ul.innerText="";
// 	for(coll of collArr){
// 		let li=document.createElement("li");
// 		li.innerText=coll.name;
// 		ul.appendChild(li);

// 	}
// };
// btn.addEventListener("click",async ()=>{
// 	let input=document.querySelector("input").value;
// 	country=input;
// 	let collArr=await CollName();
// 	show(collArr);

// });

// async function CollName(){
// 	try{
// 		let res=await axios.get(url+country);
// 		return res.data;
// 	}catch(err){
// 		return [];
// 	}
// }
