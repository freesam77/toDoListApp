// Variables //
const gameMessage1 = document.getElementById("gameMessage1");
const gameMessage2 = document.getElementById("gameMessage2");
const scoreBoard = document.getElementById("scoreBoard");
let difficulty = document.querySelectorAll(".difficulty");
difficulty.forEach(x=>{
    x.style.display = "none";
})
let wrongCount = 0;
let rightCount = 0;

// Functions //

let randomizeColor = () => {
  let r = Math.ceil(Math.random() * 255);
  let g = Math.ceil(Math.random() * 255);
  let b = Math.ceil(Math.random() * 255);

  let rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgb;
};

let generateSquare = num => {
  for (i = 0; i < num; i++) {
    let gamecon = document.querySelector("#gamecon");
    let btnput = document.createElement("button");
    btnput.className = "squareColor";
    btnput.innerHTML = "Pick Me!!";
    btnput.style.backgroundColor = randomizeColor();
    gamecon.appendChild(btnput);
  }

  // pick randomAnswer
  let squareColor = document.querySelectorAll(".squareColor");
  let randIndex = Math.floor(Math.random() * squareColor.length);
  let randPick = squareColor[randIndex];
  return (randAnswer = randPick.style.backgroundColor);
};

let changeAllColors = color => {
  let allSquare = document.querySelectorAll(".squareColor");
  let title = document.getElementById("title");
  title.style.backgroundColor = color;
  title.style.color = "white";

  allSquare.forEach(x => {
    x.disabled = true;
    x.style.backgroundColor = color;
  });
};

let deleteItem = name => {
    let elem = document.querySelector(name);
    elem.parentNode.removeChild(elem);
    wrongCount = 0;
    rightCount = 0;
    scoreBoard.innerHTML = "Wrong : " + wrongCount + " | Right : " + rightCount;
};

let deleteAllItem = name => {
    let elem = document.querySelectorAll(name);
    elem.forEach(x => {
    x.parentNode.removeChild(x);
    });
    wrongCount = 0;
    rightCount = 0;
    scoreBoard.innerHTML = "Wrong : " + wrongCount + " | Right : " + rightCount;
};



const init = (num) => {
document.getElementById("start").disabled = true;
  generateSquare(num);
  gameMessage1.textContent = "What color is : " + randAnswer + "?";
  // Check click
  let allSquare = document.querySelectorAll(".squareColor");
  let pickedColor;
  let correct = false;

  allSquare.forEach(x => {
    x.addEventListener("click", function() {
      pickedColor = this.style.backgroundColor;
      if (pickedColor === randAnswer) {
        rightCount++;
        gameMessage2.innerHTML = "Congrats! You picked the right one!";
        gameMessage2.classList = "right";
        this.disabled = true;
        correct = true;
        changeAllColors(pickedColor);
      } else {
        wrongCount++;
        gameMessage2.innerHTML = "WRONG!! Please try again...";
        gameMessage2.classList = "wrong";
        this.style.backgroundColor = "white";
        this.disabled = true;
      }
      // return correct;
      scoreBoard.innerHTML = "Wrong : " + wrongCount + " | Right : " + rightCount;
    });
  });

  if (correct === true) {
    console.log("this is true");
  }
};

document.getElementById("start").addEventListener("click", function() {
  document.getElementById("gameMessage2").innerHTML = "Please select game difficulty..";
  let difficulty = document.querySelectorAll(".difficulty");
  difficulty.forEach(x=>{
        x.style.display = "initial";
  })
});
document.getElementById("reset").addEventListener("click", function() {
    // reload the page
    location.reload();
});

// Execution //

let setDiff = (mode,howMany) => {
    document.getElementById(mode).addEventListener("click", function() {
        if(mode === "critmd"){
            document.getElementById("gamecon").className = "col-lg-11 col-md-12 text-center col-centered";
        }else if(mode === "secretmd"){
            document.getElementById("gamecon").className = "col-lg-12 text-center col-centered";
            for(i=0;i<difficulty.length-1;i++){
                difficulty[i].style.display = "none";
            }
            this.innerHTML = "100 Squares Mode!!"
        }

        difficulty.forEach(x=>{
            x.disabled = true;
        })
        deleteAllItem(".squareColor");
        init(howMany);
        document.getElementById("gameMessage2").innerHTML = "Pick a color..";
    });
}

setDiff("easymd",3)
setDiff("normmd",6)
setDiff("hardmd",9)
setDiff("critmd",12)
setDiff("secretmd",100)

