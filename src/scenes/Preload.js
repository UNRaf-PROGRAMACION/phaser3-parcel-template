import Phaser from "phaser";


export default class Preload extends Phaser.Scene {
    constructor() {
      super("preload");
    }

   

    preload(){
        this.load.image("bMenu","assets/background/bmenu.jpg");
        this.load.image("room","assets/background/bhabitacion.jpg");
        this.load.image("camera1","assets/background/bcamera1.jpg");
        this.load.image("camera2","assets/background/bcamera2.jpg");
        this.load.image("camera3","assets/background/bcamera3.jpg");

        this.load.image("doorButton","assets/background/doorButton.png");
        this.load.image("lightButton","assets/background/lightButton.png");
        this.load.image("lelftDoorLight","assets/background/lelftDoorLight.png");
        this.load.image("rightDoorLight","assets/background/rightDoorLight.png");

        this.load.image("openCameras","assets/background/openCameras.jpg");
        this.load.image("closeCameras","assets/background/closeCameras.jpg");
        this.load.image("iEnergy","assets/background/iEnergy.png");
        this.load.image("iFolder","assets/background/iFolder.png");

        this.load.spritesheet("player","assets/sprites/astronautasheet.png",{
            frameWidth: 125,
            frameHeight: 280,  
        } )
    }

    create(){
        this.scene.start("menu")
    }

    
}