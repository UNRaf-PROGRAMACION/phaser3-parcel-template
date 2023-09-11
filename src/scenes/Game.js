import Phaser from "phaser";
import Player from "../components/Player";

export default class Game extends Phaser.Scene {
 
  
  constructor() {
      super("game");
    this.player = null;

    }

    init() 
    {
      this.cursors = this.input.keyboard.createCursorKeys()


    }

  
    create(){
        this.add.image(320, 240, "room");
        this.add.image(320, 500, "cameras").setInteractive()  .on("pointerdown", () => this.scene.launch("cameras"));

        this.player = new Player(this, 300, 280, 500);
    
          this.cameras.main.startFollow(this.player);


    }

    
}