import Phaser from "phaser";
import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getTranslations, getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Menu extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("Menu");
  }

  create() {
    // Fondo del menú
    const fondoMenu = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fondoMenu');
    fondoMenu.setScale(this.cameras.main.width / fondoMenu.width, this.cameras.main.height / fondoMenu.height);

    // Logo Principal
    const selectOptionSound = this.sound.add('selectOption');
    const logo = this.add.image(this.cameras.main.centerX - 180, this.cameras.main.centerY + 60, 'Alien2').setScale(0.3).setOrigin(0.5);
    logo.setInteractive();

    // Agregar el texto "Créditos" debajo del logo
    const textoCreditos = this.add.text(this.cameras.main.centerX - 180, this.cameras.main.centerY + 200, "Créditos", {
      fontFamily: 'Arial',
      fontSize: 30,
      color: '#ffffff', // Color blanco
    });
    textoCreditos.setOrigin(0.5);
    textoCreditos.setInteractive();

    // Reproducir el video de créditos cuando se hace clic en "Créditos"
    textoCreditos.on('pointerup', () => {
      this.playCreditosVideo();
    });
    textoCreditos.on('pointerover', () => {
      selectOptionSound.play();
      textoCreditos.setScale(1.2);
    });

    textoCreditos.on('pointerout', () => {
      textoCreditos.setScale(1);
    });

    const cambiarLenguaje = this.add.text(this.cameras.main.centerX - 200, this.cameras.main.centerY + 40, "EEUU", {
      fontFamily: 'Arial',
      fontSize: 30,
      color: '#ffffff', // Color blanco
    });
    cambiarLenguaje.setOrigin(0.5);
    cambiarLenguaje.setInteractive();

    this.textoDePrueba = this.add.text(this.cameras.main.centerX - 80, this.cameras.main.centerY + 20, getPhrase(keys.Menu.Hello), {
      fontFamily: 'Arial',
      fontSize: 30,
      color: '#ffffff', // Color blanco
    });
    textoCreditos.setOrigin(0.5);

    // Reproducir el video de créditos cuando se hace clic en "Créditos"
    cambiarLenguaje.on('pointerup', () => {
      this.getTranslations(EN_US);
        });
    cambiarLenguaje.on('pointerover', () => {
      selectOptionSound.play();
      cambiarLenguaje.setScale(1.2);
    });

    cambiarLenguaje.on('pointerout', () => {
      cambiarLenguaje.setScale(1);
    });

    logo.on('pointerover', () => {
      selectOptionSound.play();
      logo.setScale(0.37);
    });

    logo.on('pointerout', () => {
      logo.setScale(0.3);
    });
    logo.on('pointerup', () => {
      selectOptionSound.play();
      this.scene.start("Nivel1")
    });
}

  // Método para reproducir el video de créditos
  playCreditosVideo() {
    const video = this.add.video(this.cameras.main.centerX, this.cameras.main.centerY, 'Creditos'); // 'creditos' debe coincidir con el nombre que has usado en preload
    video.play();
    video.setScale(0.6);
    // Evento para volver al menú cuando el video termine
    video.on('complete', () => {
      this.scene.start('Menu');
    });
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.textoDePrueba.setText(getPhrase(keys.Menu.Hello));
    }
  }

  updateWasChangedLanguage = () => {
    this.#wasChangedLanguage = FETCHED;
  };


  async getTranslations(language) {
    this.language = language;
    this.#wasChangedLanguage = FETCHING;

    await getTranslations(language, this.updateWasChangedLanguage);
  }
}
