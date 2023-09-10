import Phaser from 'phaser'


export default class Player extends Phaser.Scene
{

constructor(scene, x, y, velocity)
{
super(scene);
scene.add.existing(this);
scene.physics.add.existing(this);
this.player = this.physics.add.sprite(x, y, "player");
this.player.setCollideWorldBounds(true);
this.player.setScale(1);
this.velocity = velocity;
this.cursors = scene.input.keyboard.createCursorKeys();
this.body = this
console.log("hola")
}


create(){
	this.anims.create({
		key: "turn",
		frames: this.anims.generateFrameNumbers("player", {start: 1, end: 1}),
		frameRate: 20
	  });
	
	this.anims.create({
		key: "left",
		frames: this.anims.generateFrameNumbers("player", { start: 0, end: 0}),
		frameRate: 5,
		repeat: -1,
	  });
	
	 
	  this.anims.create({
		key: "right",
		frames: this.anims.generateFrameNumbers("player", { start: 2, end: 2 }),
		frameRate: 5,
		repeat: -1,
	  });
}


update(){
	if (this.cursors.left.isDown) {
		this.body.velocity(-this.velocity);
		this.player.anims.play("left", true);
	  }
	  
	  else if (this.cursors.right.isDown) {
		this.body.velocity(this.velocity);
		this.player.anims.play("right", true);
	  }
	  
	  else {
		this.body.velocity(0);
		this.player.anims.play("turn");
	  }   
}
}


