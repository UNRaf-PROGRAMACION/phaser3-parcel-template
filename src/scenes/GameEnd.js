 import Phaser from "phaser";
 import events from "./EventCenter";

// //ending cutscenes
// //Credits
 export default class GameEnd extends Phaser.Scene {
     constructor() {
      super("GameEnd");
     }

//     init(){

// }

    create(){
this.add.image(970,400,"gameover",)
let buttonR=  this.add.text(900,400,"Retry",{
    fontSize : "50px"
}).setInteractive()

buttonR.on("pointerdown",()=>{
    this.scene.start("City");
    
}  );

        
    }

     update(){
        
    }

 }