import Phaser from "phaser";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Login extends Phaser.Scene {
  constructor() {
    super("Login");
  }

  create() {
    // agregar un texto "Login" en la parte superior de la pantalla
    this.add
      .text(400, 100, "Login", {
        fontSize: 48,
      })
      .setOrigin(0.5);
    // agregar un texto Ingresar con Email y contraseña que al hacer clic me levante un popup js para ingresar los datos
    // Agregar un texto "Ingresas de forma Anonima" que al hacer clic me levante un popup js para ingresar los datos
    this.add
      .text(400, 300, "Ingresas de forma Anonima", {
        fontSize: 24,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInAnonymously()
          .then(() => {
            this.scene.start("MainMenu");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });

    // agregar un texto centrado "Ingresar con Google" que al hacer clic me levante un popup js para ingresar los datos
    this.add
      .text(400, 400, "Ingresar con Google", {
        fontSize: 24,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInWithGoogle()
          .then(() => {
            this.scene.start("MainMenu");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });

    // agregar un texto "Ingresar con GitHub" que al hacer clic me levante un popup js para ingresar los datos
    // this.add
    //   .text(400, 500, "Ingresar con GitHub", {
    //     fontSize: 24,
    //   })
    //   .setOrigin(0.5)
    //   .setInteractive()
    //   .on("pointerdown", () => {
    //     this.firebase
    //       .signInWithGithub()
    //       .then(() => {
    //         this.scene.start("MainMenu");
    //       })
    //       .catch((error) => {
    //         console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
    //       });
    //   });
  }
}