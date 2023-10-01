import Phaser from "phaser";
 import events from "./EventCenter";

// //ending cutscenes
// //Credits
 export default class Credits extends Phaser.Scene {
     constructor() {
      super("Credits");
     }

//     init(){

// }

    create(){
this.add.text(600,100,"Programadores",{
    fontSize : "128px",
    fontFamily: "impact"
})
this.add.text(800,600,"Artista",{
    fontSize : "128px",
    fontFamily: "impact"
})
this.add.text(800,300,"Sebastian Faetani",{
    fontSize : "50px",
    fontFamily: "impact"
})
this.add.text(830,400,"Agustin Iñiguez",{
    fontSize : "50px",
    fontFamily: "impact"
})
this.add.text(850,800,"Sasha Flory",{
    fontSize : "50px",
    fontFamily: "impact"
})

let buttonV=  this.add.text(10,10,"Volver",{
    fontSize : "50px",
    fontFamily: "impact"
}).setInteractive()

buttonV.on("pointerdown",()=>{
    this.scene.start("MainMenu");
    
}  );

        
    }

     

 }