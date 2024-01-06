// game constants

let inputDir = {x:0, y:0};
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3')
let speed = 2;
let score = 0;
let lastPaintTime = 0;

console.log(moveSound)

let snakeArr = [
    {x: 13, y: 15}
];

let food = {x: 6, y: 7};

// game functions

function main(ctime){
    window.requestAnimationFrame(main)
    if((ctime -  lastPaintTime) / 1000 < 1/speed){
        return;
    }
   lastPaintTime = ctime;
   gameEngine();
} 

function isCollide(sarr){
 return false;
}

function gameEngine(){
    // part 1: updating the snake variable

     if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0, y:0};
        alert("Game Over, Press any key to play again")
        snakeArr = [
            {x: 13, y: 15}
        ];
       musicSound.play();
       score = 0;
     }

    //  snake eat the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
    }

    // Moving the snake

    // part 2: render the snake and food
    // display the snake
    let board = document.querySelector("#board")
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElemet = document.createElement('div');
        snakeElemet.style.gridRowStart = e.y; // y is row
        snakeElemet.style.gridColumnStart = e.x; // x is column
        
        if(index === 0){
            snakeElemet.classList.add('head');
        }else{
            snakeElemet.classList.add('snake');
        }
       
        board.appendChild(snakeElemet);
    });
    // display the food
    foodElemet = document.createElement('div');
    foodElemet.style.gridRowStart = food.y; 
    foodElemet.style.gridColumnStart = food.x; 
    foodElemet.classList.add('food')
    board.appendChild(foodElemet);
}

// main logic

window.requestAnimationFrame(main)
 window.addEventListener('keydown', (e)=>{
   inputDir = {x:0, y:1} // start the game
   moveSound.play();
   switch (e.key){
    case "ArrowUp":
        console.log("arrowup")
        inputDir.x = 0;
        inputDir.y = -1;
        break;
    case "ArrowDown":
        console.log("arrowD")
        inputDir.x = 0;
        inputDir.y = 1;
        break;
    case "ArrowLeft":
        console.log("arrowL")
        inputDir.x = -1;
        inputDir.y = 0;
        break;
    case "ArrowRight":
        console.log("arroR")
        inputDir.x = 1;
        inputDir.y = 0;
        break;
    default:
        break;
   }

 });