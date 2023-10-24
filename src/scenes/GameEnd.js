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
    const { retry, dead, menu } = keys.GameEnd;
    this.retry = retry;
    this.dead = dead;
    this.menu = menu;
  }

  create() {
    this.add.image(0,0, "gameover").setOrigin(0);
    this.died = this.add.text(760,190,getPhrase(this.dead),{
      fontSize: "100px",
      fontFamily: "Trebuchet MS",
    });
    this.buttonR = this.add
    .text(900, 550, getPhrase(this.retry), {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    })
    .setInteractive();

    this.buttonR.on("pointerdown", () => {
      this.scene.launch("UI");
      this.scene.start(this.obtenerNivelEnPausa());
    });
    this.buttonM = this.add.text(850,750,getPhrase(this.menu),{
      fontFamily: "Roboto Mono",
      fontSize: "50px",

    }).setInteractive();
    this.buttonM.on("pointerdown", () => {
      this.scene.stop("UI");
      this.scene.stop(this.obtenerNivelEnPausa());
      this.scene.start("MainMenu");
    });
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.buttonR.setText(getPhrase(this.retry));
      this.died.setText(getPhrase(this.dead));
      this.buttonM.setText(getPhrase(this.menu));
    }
  }
  obtenerNivelEnPausa(){
    const nivelEnPausa = this.scene.manager.scenes.find(scene => scene.scene.isPaused());
    return nivelEnPausa? nivelEnPausa.scene.key : null;
}
}
