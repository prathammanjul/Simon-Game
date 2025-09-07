let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red" , "yellow" , "green" , "purple"]

let h2 = document.querySelector("h2")

document.addEventListener("keypress" , function(){

    if(started == false){
        console.log("game started")
        started = true;

        levelUp();
    }

})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 200);
}

function levelUp(){
    userSeq = [];
    level++;

    h2.innerText = `level ${level}`;

    //random button choose 

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor);
     console.log(gameSeq); 

   /* console.log(randIdx);
    console.log(randColor);
    console.log(randBtn); */

    gameFlash(randBtn); 
} 

function checkAns(idx){
    // console.log("curr level : ", level)

    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
            setTimeout(levelUp , 1000);
    } else {
        h2.innerHTML = `Game Over! Your scrore was <b>${level} </b> <br> Please enter any Key to start Again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 150);
        reset();
    }
    

}



/*
you can check nodelist by using it.
 console.log(allBtn); 

 this cant be work without loops because querySelectorAll will give nodelist 
 allBtn.addEventListener("click" , function(){

    console.log("pressed");

})

*/

function btnPress(){
    // console.log("Button was pressed");
    let btn = this;
    // console.log(btn);

    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);

    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
    
}

// to access all the .btns ,  need to use loops through nodeList 
let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}


function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}


















