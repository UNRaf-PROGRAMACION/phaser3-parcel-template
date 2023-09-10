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
        this.add.image(300, 240, "room");

        this.player = new Player(this, 300, 280, 500);
    
          this.cameras.main.startFollow(this.player);


    }

    
}