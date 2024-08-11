let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); 
let msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

let reset=document.querySelector(".reset");

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame=(userChoice)=>
{
    const compChoice=genCompChoice();

    if(userChoice===compChoice)
        drawGame();
    else
    {
        let userWin=true;
        if(userChoice==="rock")
            userWin = compChoice==="paper"? false: true;
        else if(userChoice==="paper")
            userWin = compChoice==="scissors"? false: true;
        else
            userWin = compChoice==='rock'? false: true; 
        showWinner(userWin,userChoice,compChoice);
    }

}

const genCompChoice=()=>
{
    let options=["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)]; 
}

const drawGame=()=>
{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        msg.innerText=`You won!! Your ${userChoice} wins ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else
    {
        msg.innerText=`You lost, Your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

reset.addEventListener("click",()=>
{
    userScore=0;
    userScorePara.innerText=userScore;
    compScore=0;
    compScorePara.innerText=compScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#081b31";
});

