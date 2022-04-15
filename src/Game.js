// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Control = require('./keyboard')

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    
    this.boomerang = new Boomerang()
    this.hero = new Hero(this.boomerang); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.control = new Control(this.hero, this.boomerang)
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    else if (this.boomerang.position === this.enemy.position) {
      this.enemy.die();
      console.log('Enemy dead!');
    }
  }

  play() {
    this.control.runInteractiveConsole()
    setInterval(() => {
      // Let's play!
      this.enemy.moveLeft()
      
      this.check();
  
      this.regenerateTrack();
      
      this.view.render(this.track);

    }, 100);
  }
}

module.exports = Game;
