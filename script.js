// board
var blocksize = 25;
var row = 20;
var col = 20;
var board;
var context;

//snake head
var snakex = blocksize * 5;
var snakey = blocksize * 5;

var velocityx = 0;
var velocityy = 0;

var snakebody = []

//snake food
var foodX;
var foodY;
var gameover = false;


window.onload = function(){
    board = document.getElementById("board");
    board.height = row * blocksize;
    board.width = col * blocksize;
    context = board.getContext("2d"); //for drawing 
    placefood();
    document.addEventListener("keyup", changedirection);
    // update();
    setInterval(update, 1000/10);

}
function update(){
    if(gameover){
        return;
    }
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);



    context.fillStyle="red";
    context.fillRect(foodX, foodY, blocksize, blocksize);

    if(snakex == foodX && snakey == foodY){
        snakebody.push([foodX,  foodY])
        placefood()
    }
    for (let i = snakebody.length-1; i > 0; i--){
        snakebody[i] = snakebody[i-1];
    }
    if (snakebody.length){
        snakebody[0] = [snakex , snakey]
    }

    context.fillStyle="lime";
    snakex += velocityx * blocksize;
    snakey += velocityy * blocksize;
    context.fillRect(snakex, snakey, blocksize, blocksize);
    for(let i = 0; i < snakebody.length; i++){
        context.fillRect(snakebody[i][0], snakebody[i][1], blocksize, blocksize)
    }
    //game over conditions gg
    if(snakex < 0 || snakex > col*blocksize || snakey < 0 || snakey > row*blocksize){
        gameover = true;
        alert("game over GG                                                        made by EL-doctor");

    }
    for (let i = 0; i < snakebody.length; i++){
        if(snakex == snakebody[i][0] && snakey == snakebody[i][1]){
            gameover = true;
            alert("game over GG                                                   made by EL-doctor"); 
        }
    }


}

function changedirection(e){
    if (e.code == "ArrowUp" && velocityy != 1){
        velocityx = 0;
        velocityy = -1;

    }
     else if (e.code == "ArrowDown" && velocityy != -1){
        velocityx = 0;
        velocityy = 1;

    }
     else if (e.code == "ArrowLeft" && velocityx != 1){
        velocityx = -1;
        velocityy = 0;

    }
     else if (e.code == "ArrowRight" && velocityx != -1){
        velocityx = 1;
        velocityy = 0;

    }

}
function placefood(){
    foodX = Math.floor(Math.random() * col) *  blocksize;
    foodY = Math.floor(Math.random() * row) *  blocksize;
}

