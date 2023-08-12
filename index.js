const bottompanel = document.querySelector(".bottom_panel");
const scorevalue = document.querySelector("#score_value");
const hitvalue = document.querySelector("#hit_value");
const message = document.querySelector("#message");
const startbtn = document.querySelector("#start");
const timervalue = document.querySelector("#timer_value");


let time = 60;
let Score = 0;
let hitNumber = 0;
scorevalue.innerHTML = Score;

// Set initial hit and timer values to 0
hitvalue.innerHTML = hitNumber;
timervalue.innerHTML = `${0}s`;
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
            const tryagain = document.createElement("button");
            tryagain.setAttribute("id","start");
            tryagain.innerHTML = "Try again";
            bottompanel.innerHTML =`Game over!<br>Your Score ${Score}<br>`;
            message.innerHTML = "";
            message.style.background = "";
            scorevalue.innerHTML = 0;
            hitvalue.innerHTML = 0;
            bottompanel.append(tryagain);
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

function reset() {
    hitNumber = 0;
    time = 60;
    setHit();
    settimer();
    scorevalue.innerHTML = 0;
}



startbtn.addEventListener("click",(e)=>{
    reset();
    getBubbles();
    setHit();
    settimer();
    scorevalue.innerHTML = 0;
})


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
        // Check if score is greater than or equal to 10
        if (Score >= 10) {  
            Score -= 10;
            scorevalue.innerHTML = Score;
        }
        message.innerHTML = "Wrong Bubble!";
        message.style.background = "red";
        getBubbles();
        setHit();
    }
})



