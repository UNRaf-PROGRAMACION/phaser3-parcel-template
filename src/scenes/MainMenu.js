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
    this.languagesSelec = languagesSelec;
  }

  create() {
    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;

    const bgImage = this.add.image(400, 300, "menuBg");

    bgImage.setScale(
      canvasWidth / bgImage.width,
      canvasHeight / bgImage.height
    );
    bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);

    this.add.image(990, 300, "title").setScale(1.5);

    let startButton = this.add
      .text(850, 500, getPhrase(this.play), {
        fontSize: "128px",
        fontFamily: "impact",
        fill: "#FFFFFF",
      })
      .setInteractive();

    startButton.on("pointerover", () => {
      startButton.setFill("FFFF00");
    });

    startButton.on("pointerout", () => {
      startButton.setFill("#FFFFFF");
    });

    startButton.on("pointerdown", () => {
      this.scene.start("City");
    });

    let creditButton = this.add
      .text(826, 700, getPhrase(this.credits), {
        fontSize: "90px",
        fontFamily: "impact",
        fill: "#FFFFFF",
      })
      .setInteractive();

    creditButton.on("pointerover", () => {
      creditButton.setFill("FFFF00");
    });

    creditButton.on("pointerout", () => {
      creditButton.setFill("#FFFFFF");
    });

    creditButton.on("pointerdown", () => {
      this.scene.start("Credits");
    });

    let languageButton = this.add
      .text(820, 850, getPhrase(this.languagesSelec), {
        fontSize: "90px",
        fontFamily: "impact",
        fill: "#FFFFFF",
      })
      .setInteractive();

    languageButton.on("pointerover", () => {
      languageButton.setFill("FFFF00");
    });

    languageButton.on("pointerout", () => {
      languageButton.setFill("#FFFFFF");
    });

    languageButton.on("pointerdown", () => {
      this.scene.start("LanguageSelector");
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
