let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let but=document.querySelector("button");
but.addEventListener("click",function(){
    let li=document.createElement("li");
    let b=document.createElement("button");
    b.innerText="delete";
    b.classList.add("del");
    li.innerText=inp.value;
    inp.value="";
    li.append(b);
    ul.appendChild(li);
});
let del=document.querySelectorAll(".del");
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let p=event.target.parentElement;
        p.remove();
    }
})