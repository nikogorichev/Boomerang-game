// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 40;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
    }

  die() {
    this.skin = '💀';
    this.position = '?';
    console.log('Enemy is dead!');
    
    // process.exit();
  }
}

module.exports = Enemy;
