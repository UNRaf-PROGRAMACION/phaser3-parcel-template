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
        //this.load.image("jugar", "assets/images/jugar.png", 120, 40);
        //this.load.image("mapa", "assets/images/mapa.png");
        //this.load.image("boton_menu", "assets/images/boton_menu.png");
        //this.load.image("siguiente", "assets/images/siguiente.png");
        //this.load.image("atras", "assets/images/atras.png");
        this.load.image("boton_mapa", "assets/images2/boton_mapa.png");
        this.load.image("boton_flecha", "assets/images2/boton_flecha.png");
        this.load.image("boton_flecha2", "assets/images2/boton_flecha2.png");
        this.load.image("boton_pausa", "assets/images2/boton_pausa.png");
        this.load.image("boton_puntos", "assets/images2/boton_puntos.png");
        this.load.image("boton_temporizador", "assets/images2/boton_temporizador.png");
        this.load.image("boton_info", "assets/images2/boton_info.png");
        this.load.image("boton_menu", "assets/images2/boton_menu.png");
        this.load.image("boton_ganaste", "assets/images2/boton_ganaste.png");
        this.load.image("boton_perdiste", "assets/images2/boton_perdiste.png");
        this.load.image("creditos_ajustes", "assets/images2/creditos_ajustes.png");
        this.load.image("carta_bloqueada", "assets/images2/carta_bloqueada.png");
        this.load.image("reverso", "assets/images2/reverso.png");
        this.load.image("fondo_ganaste", "assets/images2/fondo_ganaste.png");
        this.load.image("fondo_perdiste", "assets/images2/fondo_perdiste.png");
        this.load.image("fondo_nivel1", "assets/images2/fondo_nivel1.png");
        this.load.image("fondo_nivel2", "assets/images2/fondo_nivel2.png");
        this.load.image("fondo_nivel3", "assets/images2/fondo_nivel3.png");
        this.load.image("fondo_nivel4", "assets/images2/fondo_nivel4.png");
        this.load.image("fondo_nivel5", "assets/images2/fondo_nivel5.png");
        this.load.image("ajustes", "assets/images2/ajustes.png");
        this.load.image("ayuda", "assets/images2/ayuda.png");
        this.load.image("jugar_boton", "assets/images2/jugar_boton.png");
        this.load.image("pantalla_ajustes", "assets/images2/pantalla_ajustes.png");
        this.load.image("pantalla_creditos", "assets/images2/pantalla_creditos.png");
        this.load.image("fondo_menu", "assets/images2/fondo_menu.png");
        this.load.image("castillo", "assets/images2/castillo.png");
        this.load.image("lago", "assets/images2/lago.png");
        this.load.image("jardin", "assets/images2/jardin.png");
        this.load.image("bosque", "assets/images2/bosque.png");
        this.load.image("montana", "assets/images2/montana.png");
        this.load.image("alicia", "assets/images2/alicia.png");
        this.load.image("reina", "assets/images2/reina.png");
        this.load.image("pausa", "assets/images/pausa.png");
        this.load.image("puntos", "assets/images/puntos.png");
        this.load.image("temporizador", "assets/images/temporizador.png");
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
        
        this.load.spritesheet("sprite_alicia", "assets/images2/sprite_alicia.png",
        { frameWidth: 123, frameHeight: 208 });

        this.load.spritesheet("sprite_gato", "assets/images2/sprite_gato.png",
        { frameWidth: 83.5, frameHeight: 54.5 });
      
        //const PROJECT_ID = '42';
          //let translations = null;
          //let language = ES_AR;
          //export async function getTranslations(lang = language) {
          //language = lang;
         // return await
          //fetch(`https://traduci-la-strapi.herokuapp.com/api/translations/${42}/${ES_AR}`)
          //.then(response => response.json())
         // .then(data => {
          //console.log(`FETCH TRANSLATIONS --- ${JSON.stringify(data)}`);
          //localStorage.setItem('translations', data);
          //});
         // }
        
        
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

      //agregar animación Alicia (en pantalla Ganaste)
      this.add.sprite(200, 1200, "sprite_alicia");
      this.anims.create({
        key: "animacion_alicia",
        frames: this.anims.generateFrameNumbers("sprite_alicia", {
          start: 0,
          end: 4,
        }),
        frameRate: 4,
        repeat: -1,
      });

      //agregar animacioón Gato (en pantalla Perdiste)
      this.add.sprite(200, 1800, "sprite_gato");
      this.anims.create({
        key: "animacion_gato",
        frames: this.anims.generateFrameNumbers("sprite_gato", {
          start: 0,
          end: 7,
        }),
        frameRate: 7,
        repeat: -1,
      });
    }

   

}