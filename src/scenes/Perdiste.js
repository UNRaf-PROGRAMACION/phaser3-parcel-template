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
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "castillo").setScale(1.1);
    this.perdiste= this.add.image (this.cameras.main.centerX, 300, 'creditos_ajustes').setScale(0.7);
        this.perdiste = this.add.text(100, 245, '¡PERDISTE!', {
            fontFamily: "Rockwell",
            fontSize: 100,
            color: "#000000",
          });

    let miSprite = this.add.sprite(this.cameras.main.centerX, 900,"sprite_gato").setScale(3.5);
    miSprite.anims.play('animacion_gato',true);


    //clic
    //this.clic = this.sound.add('clic');

    //if (!derrota) {
     // this.derrota = this.sound.add('derrota', { loop: false });
      //derrota.play();
    //}

    // Boton para volver a Menu principal
    var menu = this.add.image(600, 1400, 'boton_flecha').setScale(0.25)
    menu.setInteractive()
    menu.on('pointerdown', () => this.scene.start('MenuPrincipal'));
    //this.clic.play();
    }

    

}