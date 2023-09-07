import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }
  
    create() {

    const button = this.add.text(400, 300, "titulo").setInteractive();
        
    button.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer"
    });
  
    button.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
    });
    
    button.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        this.scene.start("game");
    });

  }}