import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }
  
    create() {

    const play = this.add.text(400, 300, "titulo").setInteractive();
        
    play.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer"
    });
  
    play.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
    });
    
    play.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        this.scene.start("game");
    });

  }}