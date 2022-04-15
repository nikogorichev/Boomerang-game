// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

const Enemy = require("./Enemy");

class Boomerang {
  constructor() {
    this.enemy = new Enemy();
    this.skin = '🌀';

    this.position = '?'
  }

  fly() {
    if (this.position <= this.enemy.position + 1 || this.position <= this.enemy.position - 1 || this.position <= this.enemy.position) {
      this.moveRight();

    }
    else {
      this.enemy.die()
      this.back()

    }

  }

  back() {
    this.moveLeft()
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
