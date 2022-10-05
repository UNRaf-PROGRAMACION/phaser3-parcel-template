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
        this.load.image("menu", "public/assets/images/menu.png");
        this.load.image("jugar", "public/assets/images/jugar.png", 120, 40);
        this.load.image("mapa", "public/assets/images/mapa.png");
        this.load.image("boton_menu", "public/assets/images/boton_menu.png");
        this.load.image("siguiente", "public/assets/images/siguiente.png");
        this.load.image("atras", "public/assets/images/atras.png");
        this.load.image("fondo1", "public/assets/images2/fondo1.png");
        this.load.image("fondo2", "public/assets/images2/fondo2.png");
        this.load.image("fondo3", "public/assets/images2/fondo3.png");
        this.load.image("fondo4", "public/assets/images2/fondo4.png");
        this.load.image("lago", "public/assets/images2/lago.png");
        this.load.image("bosque", "public/assets/images2/bosque.png");
        this.load.image("montaña", "public/assets/images2/montaña.png");
        this.load.image("alicia", "public/assets/images2/alicia.png");
        this.load.image("reina", "public/assets/images2/reina.png");
        this.load.image("pausa", "public/assets/images/pausa.png");
        this.load.image("puntos", "public/assets/images/puntos.png");
        this.load.image("temporizador", "public/assets/images/temporizador.png");
        this.load.image("reverso", "public/assets/images/reverso.png");
        this.load.image("reverso1", "public/assets/images/reverso1.png");
        this.load.image("conejo_grande", "public/assets/images/conejo_grande.png");
        this.load.image("flor_grande", "public/assets/images/flor_grande.png");
        this.load.image("corazon", "public/assets/images/corazon.png");
        this.load.image("flor", "public/assets/images/flor.png");
        this.load.image("girasol", "public/assets/images/girasol.png");
        this.load.image("llave", "public/assets/images/llave.png");
        this.load.image("pocion", "public/assets/images/pocion.png");
        this.load.image("rosa", "public/assets/images/rosa.png");
        this.load.image("sombrero", "public/assets/images/sombrero.png");
        this.load.image("torta", "public/assets/images/torta.png");
        this.load.image("ganaste", "public/assets/images/ganaste.png");
        this.load.image("perdiste", "public/assets/images/perdiste.png");
        this.load.audio('alicia_al_rescate', 'public/assets/sounds/alicia_al_rescate.mp3',
        'public/assets/sounds/alicia_al_rescate.ogg', 'public/assets/sounds/alicia_al_rescate.m4a');
        this.load.audio('win', 'public/assets/sounds/win.mp3');
        this.load.audio('clic', 'public/assets/sounds/clic.wav');
        this.load.audio('derrota', 'public/assets/sounds/derrota.mp3');
    }

    create()
    {
        // Pasa directamente a la escena del menú principal
     this.scene.start("MenuPrincipal");
    }

   

}