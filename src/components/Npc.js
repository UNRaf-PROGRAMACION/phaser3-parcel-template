import Phaser  from "phaser";

export default class Npc extends Phaser.GameObjects.Sprite{
    constructor (scene,x,y,keyAssets){
        super(scene,x,y,keyAssets);
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.allowGravity = false;
        
        
      }
      
      
    
}
        