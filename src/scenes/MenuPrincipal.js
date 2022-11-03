// @ts-ignore
import Phaser from 'phaser'
let musica = false;



export default class MenuPrincipal extends Phaser.Scene
{
    constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MenuPrincipal");
  }
	
  init(data){
    this.nivel = data.nivel;
  }

  create()
    {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_menu").setScale(1.1);

    //clic
    //this.clic = this.sound.add('clic');

    //agregar música
    //if (!musica) {
     // musica = this.sound.add('alicia_al_rescate', { loop: true });
     // musica.play();
    

    // Boton para comenzar a jugar
    let jugar = this.add.image(this.cameras.main.centerX, 625, 'jugar_boton').setScale(0.5);
    this.jugar = this.add.text(265, 600,'JUGAR', {
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#FCE4CA",
      textAlign: 'center',
    });
    jugar.setInteractive()
    jugar.on('pointerdown', () => this.scene.start('MapaNiveles', {nivel: this.nivel}));
    //this.clic.play();

    //Boton ayuda
    let ayuda = this.add.image(120,1400, 'ayuda').setScale(1.0)
    ayuda.setInteractive()
    ayuda.on('pointerdown', () => this.scene.start('Creditos'));
    //this.clic.play();


    //Boton ajustes
    let ajustes = this.add.image(600,1400, 'ajustes').setScale(1.0)
    ajustes.setInteractive()
    ajustes.on('pointerdown', () => this.scene.start('Ajustes'));
    //this.clic.play();
  
    let SpriteGato = this.add.sprite(this.cameras.main.centerX, 150,"sprite_gato").setScale(3.5);
    SpriteGato.anims.play('animacion_gato',true);
  
    let SpriteAlicia = this.add.sprite(this.cameras.main.centerX, 1200,"sprite_alicia").setScale(2.5);
    SpriteAlicia.anims.play('animacion_alicia',true);
  
  
  };



}