import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class GameWin extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("GameWin");
    const { retry, dead, menu } = keys.GameEnd;
    this.retry = retry;
    
    this.menu = menu;
  }

  create() {
    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;
    const theEnd = this.add.video(960, 500, "Ending").setInteractive()
    theEnd.setScale(1.1);
    theEnd.play();
    theEnd.on('complete', () => {
  location.reload();
    
    });
    theEnd.on("pointerdown", () => {
      location.reload();
    });
 
    }
  
}