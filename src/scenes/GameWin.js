import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

// //ending cutscenes
// //Credits
export default class GameWin extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("GameWin");
    const { retry, dead, menu } = keys.GameEnd;
    this.retry = retry;
    
    this.menu = menu;
  }

  create() {
    this.add.image(0,0, "gameover").setOrigin(0);
    this.add.text(500,190,"Has Ganado, Felicidades",{
      fontSize: "100px",
      fontFamily: "Trebuchet MS",
    });
    this.buttonM = this.add.text(850,750,getPhrase(this.menu),{
      fontFamily: "Roboto Mono",
      fontSize: "50px",

    }).setInteractive();
    this.buttonM.on("pointerdown", () => {
      this.scene.stop("UI");
      this.scene.stop("Desert");
      this.scene.start("MainMenu");
    });
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.died.setText(getPhrase(this.dead));
      this.buttonM.setText(getPhrase(this.menu));
    }
  }
}