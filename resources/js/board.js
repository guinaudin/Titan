var NB_ROW = 10;
var NB_COL = 10;
var board = new Array();

var Pos = {
    init: function(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
}

var Block = {
    init: function(obj, value, state) {
        this.obj = obj;
        this.value = value;
        this.state = state;
    }
}

var Player = {
    init: function(posX, posY, power, toughness, life) {
        this.posX = posX;
        this.posY = posY;
        this.power = power;
        this.toughness = toughness;
        this.life = life;
    }
}

function display() {
    initBoard();

    player1 = Object.create(Player);
    player1.init(findEmptyRandomPlace().posX, findEmptyRandomPlace().posY, 25, 100, 10);
    board[player1.posX][player1.posY] = player1;
    board[player1.posX][player1.posY].value = 1;
    board[player1.posX][player1.posY].state = 1;

    displayStringBoard();
}

function findEmptyRandomPlace() {
    var freeBoardPlace = new Array();
    var selectedBlock = Object.create(Pos);

    for(i = 0; i < NB_ROW; i++) {
        for(j = 0; j < NB_COL; j++) {
            if(!board[i][j].state) {
                var pos = Object.create(Pos);
                freeBoardPlace.push(pos.init(i, j));
            }
        }
    }

    return freeBoardPlace[Math.random() * freeBoardPlace.length];
}

function initBoard() {
     for(i = 0; i < NB_ROW; i++) {
        board[i] = new Array();
    }

    for(i = 0; i < NB_ROW; i++) {
        for(j = 0; j < NB_COL; j++) {
            board[i][j] = Object.create(Block);
            board[i][j].init(null, 0, 0);
        }
    }
}

function displayStringBoard() {
    var boardString = "";

    for(i = 0; i < NB_ROW; i++) {
        for(j = 0; j < NB_COL; j++) {
            boardString = boardString + "\t" + board[i][j].value;
        }
        boardString = boardString + "\n";
    }

    console.log(boardString);
}
