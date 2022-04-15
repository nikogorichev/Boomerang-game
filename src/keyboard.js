// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
class Control {
  constructor(hero, boomerang) {
    this.hero = hero;
    this.boomerang = boomerang;
    this.keyboard = {
      d: () => this.hero.moveRight(),
      a: () => this.hero.moveLeft(),
      // e: () => this.hero.('e'),
      // r: () => this.hero.('r'),
      // t: () => this.hero.('t'),
      // y: () => this.hero.('y'),
    };
  }


// Какая-то функция.

runInteractiveConsole() {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in this.keyboard) {
        this.keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}
}

// Давай попробуем запустить этот скрипт!



module.exports = Control;

