// @ts-ignore
import Phaser from "phaser";

export default class Ajustes extends Phaser.Scene {
  constructor() {
    super("Ajustes");
  }



create()
    {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "pantalla_ajustes").setScale(1.1);
    this.add.text(200, 250, "IDIOMA", {
      fontFamily: "Rockwell",
      fontSize: 90,
      align: "center",
      color: "#FCE4CA",
    });
    
     // Boton para volver al menu principal
     const menu = this.add.image(600, 100, "boton_menu").setScale(1.1);
     menu.setInteractive();
     menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
     //this.clic.play();
}
}