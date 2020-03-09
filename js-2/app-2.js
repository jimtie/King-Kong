let kingkong;
let plane = [];
let score;
function startGame() {
    kingkong = new component(250, 250, "image/317-3173468_donkey-kong-png-clipart-donkey-kong-official-art-1.png", 650, 100, "image");
    score = new component("30px", "Comic Sans MS", "black", 900, 40, "text");
    gameStage.start();
}

let gameStage = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1120;
        this.canvas.height = 630;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        let ctx = gameStage.context;
        if (this.type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else if (this.type=="text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillText(this.text, this.x, this.y);
            ctx.fillStyle = color;
        }
    }
    this.moveY = function() {
        this.y += this.speedY;        
    }
    this.moveX = function() {
        this.x += this.speedX;
    }  
    this.hit = function(aircraft) {
        let kkleft = this.x;
        let kkright = this.x + 100;
        let kktop = this.y + 140;
        let kkbottom = this.y + 150;
        let planeleft = aircraft.x;
        let planeright = aircraft.x + (aircraft.width);
        let planetop = aircraft.y;
        let planebottom = aircraft.y + (aircraft.height);
        let hitted = true;
        if ((kkbottom < planetop) || (kktop > planebottom) || (kkright < planeleft) || (kkleft > planeright)) {
            hitted = false;
        }
        return hitted;
    }
    this.miss = function(aircraft) {
        let kkleft = this.x;
        let kkright = this.x + this.width ;
        let kktop = this.y + 140;
        let kkbottom = this.y + 150;
        let planeleft = aircraft.x;
        let planeright = aircraft.x + (aircraft.width);
        let planetop = aircraft.y;
        let planebottom = aircraft.y + (aircraft.height);
        let missed = false;
        if ((kkbottom < planetop) && (kkright<planeleft) || (kktop > planebottom) && (kkright < planeleft)) {
            missed = true;
        }
        return missed;
    }
}

    let crashed = [];
    function updateGameArea() {
    let width, height, minHeight, maxHeight;
    for (i = 0; i < plane.length; i += 1) {
        if (kingkong.hit(plane[i])) {
            crashed.push(plane[i]);
            plane.splice(i,1);
        } else if (kingkong.miss(plane[i])) {
            gameStage.stop();
        }
    }
    gameStage.clear();
    gameStage.frameNo += 1;
    if (gameStage.frameNo == 1 || everyinterval(50)) {
        width = gameStage.canvas.width;
        minHeight = 100;
        maxHeight = 500;
        height = Math.floor(Math.random()*(maxHeight-minHeight)+minHeight);
        plane.push(new component(120, 120, "image/airplane.png", 0, height,"image"));
    }
    for (let i = 0; i < plane.length; i ++) {
        plane[i].speedX = 5
        plane[i].moveX();
        plane[i].update();
    }

    let count = 0;
    for (let a = 0; a < crashed.length; a++){
        count=count+1;
}
    score.text="SCORE: " + count;
    score.update();

    kingkong.moveY();
    kingkong.update();
}

// let n = 150;
// function timespan (starttime) {
//     for (i=0; i<15; i++) {
//         starttime-=20;
//     }
// }
// n-5;
function everyinterval(n) {
    if ((gameStage.frameNo / n) % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
function moveup() {
    kingkong.speedY = -3; 
}
function movedown() {
    kingkong.speedY = 3; 
}
document.onkeydown = keydowncheck;
document.onkeyup = keyupcheck;

function keydowncheck(e) {

    if (e.keyCode == '87') {
        kingkong.speedY=-3;
    }
    else if (e.keyCode == '83') {
        kingkong.speedY=3;
    }
}
function keyupcheck(e) {
    if (e.keyCode == '87') {
        kingkong.speedY=0;
    }
    else if (e.keyCode == '83') {
        kingkong.speedY=0;
    }
}

function clearmove() {
    kingkong.speedY = 0; 
}

startGame();