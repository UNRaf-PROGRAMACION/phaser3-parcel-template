// Clase Preloads, para separar los peloads y tener mejor orden
import Phaser from 'phaser';
export class Preloads extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    //Sonidos
    this.load.audio('dado','assets/sounds/Dado.mp3');
    this.load.audio('saltotesonido','assets/sounds/saltotesonido.mp3');
    this.load.audio('sonidorana','assets/sounds/sonidorana.mp3');
    this.load.audio('tematab','assets/sounds/CancionTablero.mp3');
    this.load.audio('temamen','assets/sounds/CancionMenu.mp3');
    this.load.audio('victoria','assets/sounds/victoria.mp3');
    this.load.audio('alan','assets/sounds/alansonido.mp3');
    this.load.audio('cabra','assets/sounds/cabrasonido.mp3');
    this.load.audio('juan','assets/sounds/juansonido.mp3');
    //Fotos
    this.load.image('alanpp','assets/images/alanpp.png');
    this.load.image('juanpp','assets/images/juanpp.png');
    this.load.image('cabrapp','assets/images/cabrapp.png');
    //Backgrounds
    this.load.image('carga_bg','assets/images/carga_bg.png');
    this.load.image('menu_bg','assets/images/menu_bg.png');
    this.load.image('custom_bg','assets/images/custom_bg.png');
    this.load.image('tablero_bg','assets/images/tablero_bg.png');
    this.load.image('tablero_blur','assets/images/tablero_blur.png');
    this.load.image('ayuda_bg','assets/images/ayuda_bg.png');
    //Casilla y pjs
    this.load.image('sapo','assets/images/sapojg1.png');
    this.load.image('sapo2','assets/images/sapojg2.png');
    this.load.image('sapo3','assets/images/sapojg3.png');
    this.load.image('vacio','assets/images/casillerovacio.png') //Vacio tuki
    //Botones
    this.load.image('ayuda','assets/images/ayuda.png');
    this.load.image('play','assets/images/play.png');
    this.load.image('volver','assets/images/volver.png');
    this.load.image('config','assets/images/configuracion.png');
    this.load.image('credit','assets/images/creditos.png');
    this.load.image('saltote','assets/images/saltote.png');
    this.load.image('dadoicon','assets/images/dado.png');
    this.load.image('tuerca','assets/images/tuerca.png');
    //HUD
    this.load.image('Jugador 1','assets/images/turno1.png');
    this.load.image('Jugador 2','assets/images/turno2.png');
    this.load.image('Jugador 3','assets/images/turno3.png');
    this.load.image('ContMoscas','assets/images/moscas.png');
    //Cartas
    this.load.image('1','assets/images/cartas/Roja1.png')
    this.load.image('2','assets/images/cartas/Verde1.png')
    this.load.image('3','assets/images/cartas/Amarilla1.png')
    this.load.image('4','assets/images/cartas/Verde2.png')
  }

  create() {
    // Se agrega img de fondo
    let musica = this.sound.add('temamen',{loop: true})
    this.add.image(this.cameras.main.centerX,
    this.cameras.main.centerY,
       'carga_bg').setScale(0.5);
    this.add.text(this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY/1.5, 'Cargando...')
       .setOrigin(0.5)
       .setPadding(10)
       .setStyle({ 
           backgroundColor: '#0000', 
           fontSize: '60px', 
           fill: '#6c4600', 
           fontFamily: 'Arial'
       })
    // Se agrega un timer y luego a la escena del menú principal
    setTimeout(() => {
      this.scene.start("MainMenu");
      musica.play();
    }, 3000);
  }
}
