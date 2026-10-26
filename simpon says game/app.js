let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let heighest=0;
let h2=document.querySelector("h2");
let color=["pink","orange","green","purple"];
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();
    }
});
function flash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },250)
};
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=color[randomIdx];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flash(randomBtn);
};
function reset(){
    userSeq=[];
    gameSeq=[];
    level=0;
    start=false;
};
function check(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(level>heighest){
            heighest=level;
        }
        h2.innerHTML=`Game Over ,<b> Your Score is ${level} <br> Press any key to start <br> <b> Heighest Score is ${heighest}`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },250);
        reset();
    }
}
let btn=document.querySelectorAll(".btn");
function pressBtn(){
    let btn=this;
    flash(btn);
    let b=btn.getAttribute("id");
    userSeq.push(b);
    check(userSeq.length-1);
};
for(b of btn){
    b.addEventListener("click",pressBtn);
}