// Наш герой.

const Boomerang = require("./Boomerang");

class Hero {
  constructor({position}) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 1;
    this.boomerang = new Boomerang();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
