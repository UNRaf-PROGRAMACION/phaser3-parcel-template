// @ts-ignore
import Phaser from "phaser";

export default class Ajustes extends Phaser.Scene {
  constructor() {
    super("Ajustes");
  }



create()
    {
      if(!this.scale.isFullscreen){
        this.scale.startFullscreen();
      }
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "pantalla_ajustes").setScale(1.1);
    this.add.text(190, 270, "IDIOMA", {
      fontFamily: "Rockwell",
      fontSize: "90px",
      align: "center",
      color: "#FCE4CA",
    });

    this.add.image(this.cameras.main.centerX, 550, "argentina").setScale(0.5);
    this.add.image(this.cameras.main.centerX, 850, "brasil").setScale(0.5);
    this.add.image(this.cameras.main.centerX, 1150, "eeuu").setScale(0.5);
    
     // Boton para volver al menu principal
     const menu = this.add.image(650, 1400, "boton_menu").setScale(1.1);
     menu.setInteractive();
     menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
     //this.clic.play();
}
}