let userScore= 0;
let comScore= 0;

const choices = document.querySelectorAll('.choice');

const msg = document.querySelector("#msg");

const uScore =document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");


const showWinner =(userWin)=>{
    if(userWin){
        console.log("you win")
        msg.innerHTML= "you win";
        msg.style.backgroundColor ="green"
        uScore.innerHTML = userScore++;
    }
    else{
        console.log("com win")
          msg.innerHTML= "com win"
          msg.style.backgroundColor ="red";
          cScore.innerHTML = comScore++;

    }

}
const gameDraw = ()=>{
    console.log("game is draw");
      msg.innerHTML= "game is draw please please again"
           msg.style.backgroundColor ="#081b31"
}

const genComChoice=()=>{
    const options = ['rock', 'paper','scissors'];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const playGame=(userChoice)=>{
 console.log("was clicked and is = ",  userChoice);
 const comChoice = genComChoice();
 console.log("was clicked and is = ",  comChoice);

 if(comChoice === userChoice ){
   gameDraw();
 }
 else{
    let userWin = true;
    if(userChoice === 'rock'){
        // paper scissors
        userWin = comChoice === "paper" ? false: true;
    }
    else if( userChoice === 'paper'){
         // rock scissors
         userWin = comChoice === "scissors" ? false: true;
    }else{
         // rock , paper
         userWin = comChoice === "rock" ? false: true;
    }
    showWinner(userWin);
 }

}
choices.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("was clicked and is is ",  choiceId)

        playGame(userChoice);

    })

})