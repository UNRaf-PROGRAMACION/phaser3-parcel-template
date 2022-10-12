// @ts-ignore
import Phaser from "phaser";

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }


create()
    {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "pantalla_creditos").setScale(1.1);
    
     // Boton para volver al menu principal
     const menu = this.add.image(600, 100, "boton_menu").setScale(1.1);
     menu.setInteractive();
     menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
     //this.clic.play();
}

}

