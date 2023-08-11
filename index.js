const bottompanel = document.querySelector(".bottom_panel");
const scorevalue = document.querySelector("#score_value");
const hitvalue = document.querySelector("#hit_value");
const message = document.querySelector("#message");


let time = 60;
let Score = 0;
let hitNumber = 0;
scorevalue.innerHTML = Score;


function setHit(){
    hitNumber = Math.floor(Math.random() * 10 + 1);
    hitvalue.innerHTML = hitNumber;
}

function settimer(){
    const time_interval = setInterval(()=>{
        const timervalue = document.querySelector("#timer_value");
        time --;
        if(time>=0){
            timervalue.innerHTML = `${time}s`;
        }
        else{
            clearInterval(time_interval);
            bottompanel.innerHTML =`Game over!<br>Your Score ${Score}<br><br>Try again!<br><br><br>`;
            message.innerHTML = "";
            message.style.background = "";
            scorevalue.innerHTML = 0;
            hitvalue.innerHTML = 0;
        }
    },1000);

}

function setScore(){
    Score += 10;
    scorevalue.innerHTML = Score;
   
}

function getBubbles(){
    bottompanel.innerHTML = "";
    const bubblecount = Math.floor(Math.random()*100+100);
    for(let i=0; i<bubblecount; i++){
       const bubble = document.createElement("div");
       const random_number = Math.floor(Math.random() * 10 + 1);
       bubble.setAttribute("class","bubble");
       bubble.innerHTML = `${random_number}`;
       bottompanel.append(bubble);
    }
}

// main game logic:
bottompanel.addEventListener("click",(e)=>{
    let clickBuble = Number(e.target.textContent);
    if(clickBuble === hitNumber){
        setScore();
        message.innerHTML = "Very Good Correct Bubble continue!";
        message.style.background = "green";
        getBubbles();
        setHit();
    }
    else{
        Score -= 10;
        scorevalue.innerHTML = Score;
        message.innerHTML = "Wrong Bubble!";
        message.style.background = "red";
        getBubbles();
        setHit();
    }
})

getBubbles();
setHit();
settimer();


