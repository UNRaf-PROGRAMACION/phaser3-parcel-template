import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
    constructor() {
      super("menu");
    }

    create(){

        this.add.image(300, 240, "bMenu")
        ;

        this.nameText = this.add.text(70, 100, "La Ultima Misión",{
            fontSize: "20px",
            frontFamily: "Console",
      
            fill: "#FFFFFF",
        })
        this.newGameText = this.add.text(70, 300, "Nueva Partida", {
            fontSize: "20px",
            frontFamily: "Console",
      
            fill: "#FFFFFF",
          }).setInteractive()  .on("pointerdown", () => this.scene.start("game"));
          
          this.continueText = this.add.text(70, 350, "Continuar", {
            fontSize: "20px",
            frontFamily: "Console",
      
            fill: "#FFFFFF",
          });

    }
    


}