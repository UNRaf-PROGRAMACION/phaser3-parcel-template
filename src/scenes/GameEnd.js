import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

// //ending cutscenes
// //Credits
export default class GameEnd extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("GameEnd");
    const { retry } = keys.GameEnd;
    this.retry = retry;
  }

  create() {
    this.add.image(970, 400, "gameover");
    let buttonR = this.add
      .text(900, 400, getPhrase(this.retry), {
        fontSize: "50px",
      })
      .setInteractive();

    buttonR.on("pointerdown", () => {
      this.scene.launch("UI");
      this.scene.start("City");
    });
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.retry.setText(getPhrase(this.retry));
    }
  }
}
