import Phaser from "phaser";
// import events from "./EventCenter";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

preload() {
  this.load.image("principal-character", "./assets/sprites/principal-character.png");
  this.load.image ("dynamite" , "./assets/sprites/dynamite.png");
  this.load.audio("main-menu-song", "./assets/audio/mainMenuSong.mp3");
  this.load.audio("game-song", "./assets/audio/gameSong.mp3");
}

create () {
  this.scene.start("principal-menu");

  //  animacion maqueta comentada
        // this.anims.create({
        //     key: 'left',
        //     frames: this.anims.generateFrameNumbers('maqueta', { start: 0, end: 3 }
        //     frameRate: 10, repeat: -1
        // });

        // this.anims.create({
        //     key: 'right',
        //     frames: this.anims.generateFrameNumbers('maqueta', { start: 0, end: 3 }
        //     frameRate: 10, repeat: -1

        // });

        // this.anims.create({
        //     key: 'up',
        //     frames: this.anims.generateFrameNumbers('maqueta', { start: 0, end: 3 }
        //     frameRate: 10, repeat: -1
        // });

        // this.anims.create({
        //     key: 'down',
        //     frames: this.anims.generateFrameNumbers('maqueta', { start: 0, end: 3 }
        //     frameRate: 10, repeat: -1
        // });

  }
}
