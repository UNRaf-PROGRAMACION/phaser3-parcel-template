import Phaser from 'phaser'


export default class Player extends Phaser.GameObjects.Sprite
{
velocity;

body;

cursors

constructor(scene, x, y, texture)
{
super(scene, x, y, texture);

scene.add.existing(this);
scene.physics.add.existing(this);

this.body.setCollideWorldBounds(true);

this.setTexture(texture)
this.velocity = 500;
this.cursors = scene.input.keyboard.createCursorKeys();
}

create () {
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
		this.body.velocityx(-this.velocity);
		this.body.anims.play("left", true);
	  }
	  else if (this.cursors.right.isDown) {
		this.body.velocity(this.velocity);
		this.body.anims.play("right", true);
	  }
	  else {
		this.body.velocity(0);
		this.body.anims.play("turn");
	  }   
}

}


