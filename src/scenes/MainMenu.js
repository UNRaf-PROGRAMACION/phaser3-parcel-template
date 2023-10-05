 import Phaser from "phaser";
 import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
 import { getPhrase } from "../services/translations";
import keys from "../enums/keys";
//  starts the game
//  Continue game
//  credits
//  Language selector
 export default class MainMenu extends Phaser.Scene {
  #wasChangedLanguage = TODO;
   constructor() {
     super("MainMenu");
     const { play, credits, languagesSelec } = keys.MainMenu;
     this.play = play;
     this.credits = credits;
     this.languagesSelec = languagesSelec
   }

   create() {

     const canvasWidth = this.sys.game.config.width;
     const canvasHeight = this.sys.game.config.height;

     const bgImage = this.add.image(400, 300, "menuBg");

     bgImage.setScale(canvasWidth / bgImage.width, canvasHeight / bgImage.height);
     bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);


     this.add.image(990, 300, "title").setScale(2);

     let startButton = this.add.text(840, 500, getPhrase(this.play), {
       fontSize: "90px",
       fontFamily: "impact",
       fill: "#FFFFFF"
     }).setInteractive();

     startButton.on("pointerdown", () => {
         this.scene.start("City");
     });

     let creditButton = this.add.text(810, 640, getPhrase(this.credits), {
      fontSize: "80px",
      fontFamily: "impact",
      fill: "#FFFFFF"
    }).setInteractive();

    creditButton.on("pointerdown", () => {
        this.scene.start("Credits");
    });

    let languageButton = this.add.text(785, 780, getPhrase(this.languagesSelec), {
      fontSize: "80px",
      fontFamily: "impact",
      fill: "#FFFFFF"
    }).setInteractive();

    languageButton.on("pointerdown", () => {
        this.scene.start("LanguageSelector")
    });

  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.play.setText(getPhrase(this.play));
      this.credits.setText(getPhrase(this.credits));
      this.languagesSelec.setText(getPhrase(this.languagesSelec));
    }
  }
}