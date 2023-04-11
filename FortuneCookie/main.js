//const buttonTryAgain = document.querySelector(button)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const hide2 = document.querySelector('h3')

//const image = document.querySelector("#fortuneCookie");
//const imgReset = document.querySelector('#btnReset');
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
// hide2.classList.toggle("hide")
function tryAgain() {
  randomNumber = Math.round(Math.random()*5) 
}

//não precisei usar as funções abaixo, pois utilizei a propriedade onlick="function()"
//function changeScreen () {toggleScreen()}
//image.addEventListener("click", changeScreen);
//imgReset.addEventListener("click", changeScreen);
//math.ceil(math.random()*10) 0 < x < 10, therefore:

let randomNumber = Math.round(Math.random() * 5)
let xAttempts = 1
console.log(randomNumber)
const fortunePhrases = [
  {
    ph: "Anxiety wont' help your problems"
  },
  {
    ph: "Everything has beauty, but not everyone can see it."
  },
  {
    ph: "Do your job to the best of your ability"
  },
  {
    ph: "Your hard work will be rewarded"
  },
  {
    ph: "Trust your friends, but keep your eyes open"
  },
  {
    ph: "Take care of yourself first. Then help others"
  }
]

let randomPhrase = fortunePhrases[randomNumber];
console.log(randomPhrase)

function changeh3(){
  let newRandomNumber = Math.round(Math.random() * 5)
  randomPhrase = fortunePhrases[newRandomNumber]
  hide2.innerText = randomPhrase.ph
  console.log(newRandomNumber)
}
