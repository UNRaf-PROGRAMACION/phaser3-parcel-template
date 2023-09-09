import Phaser from "phaser";


export default class Preload extends Phaser.Scene {
    constructor() {
      super("preload");
    }

   

    preload(){
        this.load.image("bMenu","assets/background/bmenu.jpg");
        this.load.image("room","assets/background/bhabitacion.jpg");
        this.load.spritesheet("player","assets/sprites/astronautasheet.png",{
            frameWidth: 125,
            frameHeight: 280,  
        } )
    }

    create(){
        this.scene.start("menu")
    }

    
}