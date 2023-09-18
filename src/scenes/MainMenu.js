// import Phaser from "phaser";
// import events from "./EventCenter";
// //starts the game
// //Continue game
// //credits
// //Language selector
// export default class MainMenu extends Phaser.Scene {
//   constructor() {
//     super("MainMenu");
//   }

//   create() {

//     const canvasWidth = this.sys.game.config.width;
//     const canvasHeight = this.sys.game.config.height;

//     const bgImage = this.add.image(400, 300, "menuBg");

//     bgImage.setScale(canvasWidth / bgImage.width, canvasHeight / bgImage.height);
//     bgImage.setPosition(canvasWidth / 2, canvasHeight / 2);


//     this.add.image(990, 300, "title").setScale(2);
//     let startButton = this.add.text(850, 500, "Jugar", {
//       fontSize: "128px",
//       fontFamily: "impact",
//       fill: "#FFFFFF"
//     }).setInteractive();

//     startButton.on("pointerdown", () => {
//         this.scene.start("City");
//     });
//   }

//   update() {}
// }