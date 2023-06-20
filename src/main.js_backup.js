import Phaser from "phaser";

//import TitleScreen from "./scenes/TitleScreen";
//import Game from "./scenes/Game";

var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 640,
    height: 512,   
    // scene: {
    //     key: 'main',
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};
var game = new Phaser.Game(config);

//function preload() {
    // load the game assets – enemy and turret atlas
 //   this.load.image('sprite', '../assets/sprite.png');
   // this.load.atlas('sprites', 'assets/spritesheet.png', 'assets/spritesheet.json');    
 //   this.load.image('bullet', '../assets/bullet.png');
//}

//const config = {
    // type: Phaser.AUTO,
    // width: 800,
    // height: 600,
    // physics: {
    //     default: 'arcade',
    //     arcade:{
    //         gravity: {y: 0}
    //     }
    // }
   // backgroundColor: '#3FFF96',
//}

  //  const game = new Phaser.Game(config);

    //game.scene.add('titlescreen', TitleScreen);
    //game.scene.start('titlescreen');
    game.scene.add('game',Game);
   // game.scene.add('enemy',Enemy);
    game.scene.start('game');
    