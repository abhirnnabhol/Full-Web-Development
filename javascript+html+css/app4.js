//callback hell
// let h2=document.querySelector("h2");
// function changeColor(color,delay){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			let random=Math.floor(Math.random()*5)+1;
// 			if(random>3){
// 				reject(random);
// 			}else{
// 				h2.style.color=color;
// 				resolve();
// 			}
// 		},delay)

// 	})
// };
// async function updating(){
// 	try{
// 		await changeColor("red",1000);
// 		await changeColor("green",1000);
// 		await changeColor("blue",1000);
// 	}catch(error){
// 		console.log(error);
// 		console.log("error is found");
// 	}
// 	let a=5;
// 	console.log(a+3);
// };
// updating();

// let h2=document.querySelector("h2");
// function changeColor(color,delay,update){
// 	setTimeout(()=>{
// 		h2.style.color=color;
// 		if(update) update();
// 	},delay)
// };
// changeColor("red",1000,()=>{
// 	changeColor("green",1000,()=>{
// 		changeColor("blue",1000);
// 	})
// })

// function saveToDB(data,success,failure){
// 	let speed=Math.floor(Math.random()*10)+1;
// 	if(speed>4){
// 		success();
// 	}else{
// 		failure();
// 	}
// }
// saveToDB("apnacollege",()=>{
// 	console.log("data1 is saved");
// 	saveToDB("abhirnna",()=>{
// 		console.log("data2 is saved");
// 		saveToDB("bhol",()=>{
// 			console.log("data3 is saved");
// 		},()=>{
// 			console.log("data3 is not saved");
// 		});
// 	},()=>{
// 		console.log("data2 is not saved");
// 	})
// },()=>{
// 	console.log("data1 is not saved");
// })


// function saveToDB(data) {
// 	return new Promise((resolve, reject) => {
// 		let speed = Math.floor(Math.random() * 10) + 1;
// 		if (speed > 4) {
// 			resolve("promise is fulfilled");
// 		} else {
// 			reject("promise is not fulfilled");
// 		}

// 	});
// }
// saveToDB("apnacollege")
// 	.then((result) => {
// 		console.log(result);
// 		console.log("data1 is stored");
// 		return saveToDB("abhirnna")
// 	})
// 	.then((result)=>{
// 		console.log(result);
// 		console.log("data2 is stored");
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 		console.log("data is not stored");
// 	})


// let h2=document.querySelector("h2");
// function changeColor(color,delay){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			h2.style.color=color;
// 			resolve("color changed");
// 		},delay)
// 	})
// };
// changeColor("red",1000)
// .then(()=>{
// 	return changeColor("green",1000);
// })
// .then(()=>{
// 	return changeColor("blue",1000);
// })
// .then(()=>{
// 	return changeColor("yellow",1000);
// })
// .then(()=>{
// 	return changeColor("pink",1000);
// })

// changeColor("red",1000,()=>{
// 	changeColor("green",1000,()=>{
// 		changeColor("blue",1000,()=>{
// 			changeColor("yellow",1000,()=>{
// 				changeColor("pink",1000);
// 			})
// 		});
// 	})
// })

// async function greet(){
// 	throw "random error";
// 	return "hello";
// };
// greet()
// .then((result)=>{
// 	console.log("abhirnna");
// })
// .catch((error)=>{
// 	console.log("weak connection",error);
// })

// async function greet(){
// 	throw "error";
// 	return "hello";
// };
// greet()
// .then((result)=>{
// 	console.log(result);
// 	console.log("hello");
// })
// .catch((error)=>{
// 	console.log("error is ",error);
// })

// let hello=async ()=>{
// 	return "hello";
// }

// function getNum(){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			let random=Math.floor(Math.random()*10)+1;
// 			console.log(random);
// 			resolve();
// 		},1000)
// 	});
// }
// async function demo(){
// 	await getNum();
// 	await getNum();
// 	await getNum();
// 	await getNum();
// 	getNum();
// }
// demo();