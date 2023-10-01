export default class Enemies extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, velocity) {
    super(scene, x, y, texture);
    this.setTexture("buho");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.velocityEnemigo = velocity;
    this.setScale(0.2);
    this.setCollideWorldBounds(true); 
      }

  update() {
    //this.x += this.velocityEnemigo;
    this.x += this.velocityEnemigo * 0.1; // Mover en incrementos más pequeños

    
    this.scene.tweens.add({
      targets: this,
      x: `+=200`,
      ease: 'Linear',
      duration: 2000,
      yoyo: true,
      repeat: -1,
      onStart: () => {
        this.velocityEnemigo *= -1;
      },
    });
  }
}
