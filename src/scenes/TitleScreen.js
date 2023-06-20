import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene{
    preload(){

    }

    create(){
        this.add.text(200, 200, 'Click sprites to toggle tint mode').setOrigin(0.5,0.5);
       
            }
}