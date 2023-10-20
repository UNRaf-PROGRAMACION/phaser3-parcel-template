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
    
   
  }

  create() {
    this.add.image(0,0, "gameover").setOrigin(0);
    this.died = this.add.text(760,190,getPhrase(this.dead),{
      fontSize: "100px",
      
    })
    let buttonR = this.add
      .text(810, 550, getPhrase(this.retry), {
        fontSize: "50px",
      })
      .setInteractive();

    this.buttonR.on("pointerdown", () => {
      this.scene.launch("UI");
      this.scene.start("City");
    });
    let buttonM=this.add.text(770,750,"Menú Principal",{
      fontSize: "50px",

    }).setInteractive();
    this.buttonM.on("pointerdown", () => {
      this.scene.stop("UI");
      this.scene.stop("City");
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
}
