import Phaser from "phaser";
import { EN_UK, ES_AR } from "../enums/languages"
import { FETCHED, FETCHING, READY, TODO  } from "../enums/status";
import { getTranslations, getPhrase } from "../services/translations";
import keys from "../enums/keys";

 export default class LanguageSelector extends Phaser.Scene {
  #textSpanish;
  #textEnglish;

  #updatedTextInScene;
  #updatedString = "Volver";
  #wasChangedLanguage = TODO;

   constructor() {
     super("LanguageSelector");
     const { back, englishSel, spanishSel } = keys.MainMenu;
     this.#updatedString = back;
     this.spanishSel = spanishSel;
     this.englishSel = englishSel;

   }

   init ({ language }) {
    this.language = language;
   }

   create() {
    const { width, height } = this.scale;

    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;
    
    const bgImage = this.add.image(400, 300, "menuBg");
    bgImage.setScale(canvasWidth / bgImage.width, canvasHeight / bgImage.height);
    bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);


    this.#textSpanish = this.add
      .text(400, 600, getPhrase(this.spanishSel), {
        fontSize: "128px",
        fontFamily: "impact",
        fill: "#FFFFFF"
      })
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.getTranslations(ES_AR);
      })

    this.#textEnglish = this.add
      .text(1000, 600, getPhrase(this.englishSel) ,{
        fontSize: "128px",
        fontFamily: "impact",
        fill: "#FFFFFF"
      })
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.getTranslations(EN_UK);
      });


    this.#updatedTextInScene = this.add
    .text(20, 20, getPhrase(this.#updatedString), {
      fontSize: "128px",
      fontFamily: "impact",
      fill: "#FFFFFF"
    })
    .setInteractive()
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.scene.start("MainMenu", { language: this.language });
    });

   }

   update(){
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.#updatedTextInScene.setText(getPhrase(this.#updatedString));
      this.#textSpanish.setText(getPhrase(this.spanishSel));
      this.#textEnglish.setText(getPhrase(this.englishSel));
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