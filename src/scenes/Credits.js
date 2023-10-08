import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

// //ending cutscenes
// //Credits
export default class Credits extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("Credits");
    const { programmers, artist, back } = keys.CreditsMenu;
    this.programmers = programmers;
    this.artist = artist;
    this.back = back;
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
    this.add.text(600, 100, getPhrase(this.programmers), {
      fontSize: "128px",
      fontFamily: "impact",
    });
    this.add.text(800, 600, getPhrase(this.artist), {
      fontSize: "128px",
      fontFamily: "impact",
    });
    this.add.text(800, 300, "Sebastian Faetani", {
      fontSize: "50px",
      fontFamily: "impact",
    });
    this.add.text(830, 400, "Agustin Iñiguez", {
      fontSize: "50px",
      fontFamily: "impact",
    });
    this.add.text(850, 800, "Sasha Flory", {
      fontSize: "50px",
      fontFamily: "impact",
    });

    let buttonV = this.add
      .text(10, 10, getPhrase(this.back), {
        fontSize: "50px",
        fontFamily: "impact",
      })
      .setInteractive();

    buttonV.on("pointerover", () => {
      buttonV.setFill("FFFF00");
    });

    buttonV.on("pointerout", () => {
      buttonV.setFill("#FFFFFF");
    });

    buttonV.on("pointerdown", () => {
      this.scene.start("MainMenu");
    });
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.programmers.setText(getPhrase(this.programmers));
      this.artist.setText(getPhrase(this.artist));
      this.back.setText(getPhrase(this.back));
    }
  }
}
