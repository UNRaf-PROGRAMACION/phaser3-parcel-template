import Phaser  from "phaser";

export default class Npc extends Phaser.GameObjects.Sprite{
    constructor (scene,texture){
        super(scene, texture);
        this.setTexture("Npc");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        
        
      }
      
      
    
}
        