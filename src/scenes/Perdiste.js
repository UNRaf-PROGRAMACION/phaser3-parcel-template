import Phaser from 'phaser'




export default class Perdiste extends Phaser.Scene
{
    constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Perdiste");
  }


    create()
    {
    
      let derrota = false;
    
      // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_perdiste").setScale(1.1);
    this.perdiste= this.add.image (this.cameras.main.centerX, 500, 'boton_perdiste').setScale(0.7);
        this.perdiste = this.add.text(175, 445,  '¡PERDISTE!', {
            fontFamily: "Rockwell",
            fontSize: 70,
            color: "#990066",
          });

    


    //clic
    //this.clic = this.sound.add('clic');

    //if (!derrota) {
     // this.derrota = this.sound.add('derrota', { loop: false });
      //derrota.play();
    //}

    // Boton para volver al nivel
    var menu = this.add.image(600, 1400, 'boton_flecha').setScale(0.25)
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('MapaNiveles'));
    //this.clic.play();


    }

    

}