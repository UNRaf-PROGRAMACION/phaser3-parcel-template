import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Login extends Phaser.Scene {
  #wasChangedLanguage = TODO;
  constructor() {
    super("Login");
    const { login, guest, user } = keys.LoginMenu;
    this.login = login;
    this.guest = guest;
    this.user = user;
  }

  create() {
    this.click = this.sound.add("click", { volume: 0.3 });
    

    const canvasWidth = this.sys.game.config.width;
    const canvasHeight = this.sys.game.config.height;

    const bgImage = this.add.image(400, 300, "menuBg");

    bgImage.setScale(
      canvasWidth / bgImage.width,
      canvasHeight / bgImage.height
    );
    bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);
    
    this.add
      .text(930, 200, getPhrase(this.login), {
        fontSize: "90px",
        fontFamily: "Trebuchet MS",
        fill: "FFFF00",
      })
      .setOrigin(0.5);
    // agregar un texto Ingresar con Email y contraseña que al hacer clic me levante un popup js para ingresar los datos
    // Agregar un texto "Ingresas de forma Anonima" que al hacer clic me levante un popup js para ingresar los datos
    this.guestText = this.add.text(930, 400, getPhrase(this.guest), {
        fontSize: "60px",
        fontFamily: "Trebuchet MS",
        fill: "FFFF00",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.click.play();
        this.firebase
          .signInAnonymously()
          .then(() => {
            this.scene.start("MainMenu");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });
      this.guestText.on("pointerover", () => {
        this.guestText.setFill("#F3E5AB");
      });
  
      this.guestText.on("pointerout", () => {
        this.guestText.setFill("FFFF00");
      });

    // agregar un texto centrado "Ingresar con Google" que al hacer clic me levante un popup js para ingresar los datos
    this.userText = this.add.text(930, 500, getPhrase(this.user), {
        fontSize: "60px",
        fontFamily: "Trebuchet MS",
        fill: "FFFF00",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.click.play();
        this.firebase
          .signInWithGoogle()
          .then(() => {
            this.scene.start("MainMenu");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });
      this.userText.on("pointerover", () => {
        this.userText.setFill("#F3E5AB");
      });
  
      this.userText.on("pointerout", () => {
        this.userText.setFill("FFFF00");
      });

    
  }
}