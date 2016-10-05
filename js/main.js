var game = new Phaser.Game(1080, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var players;

function preload() {
    game.stage.backgroundColor = '#4488AA';
    game.load.image('tux','res/tux.png');
}

function create() {
    players = game.add.group();
    createPlayer(10,10);
    createPlayer(150,10);
}

function update() {
}


function createPlayer(x,y){
  var player = players.create(x,y,'tux');
  
}

/*
function playerUpdate(){
}

function createPlatform(){
}

*/