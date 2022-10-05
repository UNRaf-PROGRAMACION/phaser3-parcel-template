// @ts-ignore
import Phaser from 'phaser'



export default class Preload extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preload");
    this.load = undefined;
    this.scene = undefined;
  }

	preload()
    {
        //this.load.image("menu", "assets/images/menu.png");
        this.load.image("jugar", "assets/images/jugar.png", 120, 40);
        this.load.image("mapa", "assets/images/mapa.png");
        this.load.image("boton_menu", "assets/images/boton_menu.png");
        this.load.image("siguiente", "assets/images/siguiente.png");
        this.load.image("atras", "assets/images/atras.png");
        this.load.image("nivel", "assets/images2/nivel.png");;
        this.load.image("menu", "assets/images2/menu.png");
        this.load.image("lago", "assets/images2/lago.png");
        this.load.image("bosque", "assets/images2/bosque.png");
        this.load.image("montaña", "assets/images2/montaña.png");
        this.load.image("alicia", "assets/images2/alicia.png");
        this.load.image("reina", "assets/images2/reina.png");
        this.load.image("pausa", "assets/images/pausa.png");
        this.load.image("puntos", "assets/images/puntos.png");
        this.load.image("temporizador", "assets/images/temporizador.png");
        this.load.image("reverso", "assets/images/reverso.png");
        this.load.image("reverso1", "assets/images/reverso1.png");
        this.load.image("conejo_grande", "assets/images/conejo_grande.png");
        this.load.image("flor_grande", "assets/images/flor_grande.png");
        this.load.image("corazon", "assets/images/corazon.png");
        this.load.image("flor", "assets/images/flor.png");
        this.load.image("girasol", "assets/images/girasol.png");
        this.load.image("llave", "assets/images/llave.png");
        this.load.image("pocion", "assets/images/pocion.png");
        this.load.image("rosa", "assets/images/rosa.png");
        this.load.image("sombrero", "assets/images/sombrero.png");
        this.load.image("torta", "assets/images/torta.png");
        this.load.image("ganaste", "assets/images/ganaste.png");
        this.load.image("perdiste", "assets/images/perdiste.png");
        //this.load.audio('alicia_al_rescate', 'assets/sounds/alicia_al_rescate.mp3',
        //'assets/sounds/alicia_al_rescate.ogg', 'assets/sounds/alicia_al_rescate.m4a');
        //this.load.audio('win', 'assets/sounds/win.mp3');
        //this.load.audio('clic', 'assets/sounds/clic.wav');
        //this.load.audio('derrota', 'assets/sounds/derrota.mp3');
    }

    create()
    {
        // Pasa directamente a la escena del menú principal
     this.scene.start("MenuPrincipal");
    }

   

}