import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class MainMenu extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("MainMenu");
    const { play, credits, languagesSelec, loader } = keys.MainMenu;
    this.play = play;
    this.credits = credits;
    this.languagesSelec = languagesSelec;
    this.loadGame = loader;
  }

  create() {
    this.menuMusic = this.sound.add("menuMusic", { loop: true, volume: 0.3 });
    this.menuMusic.play();

    this.user = this.firebase.getUser();

    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;

    const bgImage = this.add.image(400, 300, "menuBg");

    bgImage.setScale(
      canvasWidth / bgImage.width,
      canvasHeight / bgImage.height
    );
    bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);

    this.add.image(990, 300, "title").setScale(1.8);

    const startY = 500;

    let spaceIntro = this.add.video(400, 300, "introScene").setInteractive().setDepth(1);
    spaceIntro.visible = false;
    spaceIntro.setScale(
      canvasWidth / bgImage.width,
      canvasHeight / bgImage.height
    );
    spaceIntro.setPosition(canvasWidth / 2, canvasHeight / 2);

    let startButton = this.add
      .text(830, startY, getPhrase(this.play), {
        fontSize: "90px",
        fontFamily: "Trebuchet MS",
        fill: "FFFF00",
      })
      .setInteractive();

    startButton.on("pointerover", () => {
      startButton.setFill("#F3E5AB");
    });

    startButton.on("pointerout", () => {
      startButton.setFill("FFFF00");
    });

    startButton.on("pointerdown", () => {
      this.menuMusic.stop();
      spaceIntro.visible = true;
      spaceIntro.play();
      spaceIntro.on('complete', () => {
        this.scene.launch("UI");
        this.scene.start("City");
      });
    });

    let loadButton = this.add
    .text(830, startY + 100, getPhrase(this.loadGame), {
      fontSize: "90px",
      fontFamily: "Trebuchet MS",
      fill: "FFFF00",
    })
    .setInteractive()

  loadButton.on("pointerover", () => {
    loadButton.setFill("#F3E5AB");
  });

  loadButton.on("pointerout", () => {
    loadButton.setFill("FFFF00");
  });

  loadButton.on("pointerdown", () => {
    this.menuMusic.stop();
    this.firebase.loadGameData(this.user.uid, {
      lvl: this.lvl,
      hp: this.hp,
      exp: this.exp,
      damageAmount: this.damageAmount,
      missionComplete: this.missionComplete,
      squirrelsKilled: this.squirrelsKilled,
      x: 4000,
      y: 2850,
      timeStamp: new Date(),
      
    });
    this.scene.launch("UI");
    this.scene.start("City");
  });

    

    spaceIntro.on("pointerdown", () => {

      this.scene.launch("UI");
      this.scene.start("City");
    });

    let creditButton = this.add
      .text(830, startY + 300, getPhrase(this.credits), {
        fontSize: "80px",
        fontFamily: "Trebuchet MS",
        fill: "FFFF00",
      })
      .setInteractive();

    creditButton.on("pointerover", () => {
      creditButton.setFill("#F3E5AB");
    });

    creditButton.on("pointerout", () => {
      creditButton.setFill("FFFF00");
    });

    creditButton.on("pointerdown", () => {
      // this.menuMusic.pause();
      this.scene.pause("MainMenu");
      this.scene.launch("Credits");
    });

    let languageButton = this.add
      .text(830, startY + 200, getPhrase(this.languagesSelec), {
        fontSize: "80px",
        fontFamily: "Trebuchet MS",
        fill: "FFFF00",
      })
      .setInteractive();

    languageButton.on("pointerover", () => {
      languageButton.setFill("#F3E5AB");
    });

    languageButton.on("pointerout", () => {
      languageButton.setFill("FFFF00");
    });

    languageButton.on("pointerdown", () => {
      this.menuMusic.pause();
      this.scene.start("LanguageSelector");
    });

    

    let isMusicMuted = false;
    let musicOn = this.add
      .image(1790, 980, "musicOn")
      .setInteractive()
      .setScale(2);

    musicOn.on("pointerdown", () => {
      if (isMusicMuted) {
        this.menuMusic.resume();
        musicOn.setTexture("musicOn");
        isMusicMuted = false;
      } else {
        this.menuMusic.pause();
        musicOn.setTexture("musicOff");
        isMusicMuted = true;
      }
    });
    this.input.keyboard.on('keydown-F', () => {
      const fullscreenElement = this.scale.fullscreenTarget;
      
      if (this.scale.isFullscreen) {
          this.scale.stopFullscreen();
      } else {
          this.scale.startFullscreen();
      }
  });
  this.scale.fullscreenTarget = this.game.canvas;


  }

}
