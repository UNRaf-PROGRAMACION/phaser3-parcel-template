// @ts-ignore
import Phaser from 'phaser'
let musica = false;



export default class MenuPrincipal extends Phaser.Scene
{
    constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MenuPrincipal");
  }
	
  create()
    {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "menu").setScale(1.1);

    //clic
    //this.clic = this.sound.add('clic');

    //agregar música
    //if (!musica) {
     // musica = this.sound.add('alicia_al_rescate', { loop: true });
     // musica.play();
    

    // Boton para comenzar a jugar
    let jugar = this.add.image(360, 400, 'jugar').setScale(0.26)
    jugar.setInteractive()
    jugar.on('pointerdown', () => this.scene.start('MapaNiveles'));
    //this.clic.play();
  };

}