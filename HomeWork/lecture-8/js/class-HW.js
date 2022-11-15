function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min);
}

class Weapon {
  constructor({name, type, level, minDamage, maxDamage, speed}) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.speed = speed;
    this.damage = {
      min: minDamage,
      max: maxDamage
    }
  }
  getInfo() {
    return console.log(`name: ${this.name}\ntype: ${this.type}\nlevel: ${this.level}\ndamage: ${this.damage.min} - ${this.damage.max}\nspeed: ${this.speed}`)
  }
};

class RangeWeapon extends Weapon {
  constructor({name, type, level, minDamage, maxDamage, range, speed, ammo}) {
    super ({name, type, level, minDamage, maxDamage, speed})
    this.range = range;
    this.ammo = {
      total: ammo,
      current: ammo
    }
   }
   fillAmmo() {
    this.ammo.current = this.ammo.total;
    console.log(`The ammo has been reloaded!\nNow you have: ${this.ammo.current}/${this.ammo.total} ammo`)
   }

  getInfo() {
    super.getInfo();
   return console.log(`range: ${this.range}\nammo: ${this.ammo.current}/${this.ammo.total}`)
  }
  attack() {
    let chance = Math.random();
    if (this.ammo.current === 0) {
      return console.log('You got 0 damage! Refill your ammo!');
    }
    if (chance <= 0.3) {
      this.ammo.current -= 1;
      return console.log('Miss!!!');
    } else {
      this.ammo.current -= 1;
      return console.log(`Success!!! You got ${getRandomNumber(this.damage.min, this.damage.max)} damage!`);
    }

  }
}

class MeleeWeapon extends Weapon {
  constructor ({name, type, level, minDamage, maxDamage, radius, durability, speed}) {
    super ({name, type, level, minDamage, maxDamage, speed})
    this.radius = radius;
    this.durability = {
      total: durability,
      current: durability
    }
  }
  fix() {
    if (this.durability.total === 0) {
      return console.log('Your weapon has beet totally broken! You can not fix it anymore!')
    }
    if (this.durability.current === this.durability.total) {
      return console.log('Your weapons durability is full')
    } else {
      this.durability.total -= 1;
      this.durability.current = this.durability.total;
      return console.log('Your weapon has been fixed!')
    }
  }
  getInfo() {
    super.getInfo();
    return console.log(`radius: ${this.radius}\ndurability: ${this.durability.current}/${this.durability.total}`) 
  }
  attack() {
    let chance = Math.random();
    if (this.durability.current === 0) {
      return console.log('Your weapon durability is low! Fix your weapon!')
    }
    if (chance <= 0.25) {
      this.durability.current -= 1;
      console.log(`You lost 1 durability!!!`)
    }
    return console.log(`Success!!! You got ${getRandomNumber(this.damage.min, this.damage.max)} damage!!!`)
  }
}

class SwordWeapon extends MeleeWeapon {
  constructor ({name, type, level, minDamage, maxDamage, radius, durability, speed}) {
    super({name, type, level, minDamage, maxDamage, radius, durability, speed})
  }
  lvlUp() {
    this.level += 1;
    if (this.level % 2 === 0) {
      this.damage.min += 3;
    }
    if (this.level % 2 !== 0){
    this.damage.max += 3;
    this.speed -= 20;
    }
    return console.log('Your weapon level has been increased!!!')
  }
  }

class AxeWeapon extends MeleeWeapon {
  constructor ({name, type, level, minDamage, maxDamage, radius, durability, speed}) {
    super({name, type, level, minDamage, maxDamage, radius, durability, speed})
  }
  lvlUp() {
   this.level += 1;
   this.damage.min += 1;
   this.damage.max += 1;
   this.speed -= 15;
   return console.log('Your weapon level has been increased!!!') 
  }
}

class SpearWeapon extends MeleeWeapon {
  constructor ({name, type, level, minDamage, maxDamage, radius, durability, speed}) {
    super({name, type, level, minDamage, maxDamage, radius, durability, speed})
  }
  lvlUp() {
    this.level += 1;
    this.damage.max += 3;
    this.speed -= 5;
    return console.log('Your weapon level has been increased!!!');
  }
}

class BowWeapon extends RangeWeapon {
  constructor ({name, type, level, minDamage, maxDamage, range, ammo, speed}) {
    super({name, type, level, minDamage, maxDamage, range, ammo, speed})
  }
  lvlUp() {
    this.level += 1;
    if (this.level % 2 === 0) {
      this.damage.max += 3;
    }
    if (this.level % 2 !== 0) {
      this.damage.min += 2;
      this.speed -= 15;
    }
    return console.log('Your weapon level has been increased!!!');
  }
}

class CrossbowWeapon extends RangeWeapon {
  constructor ({name, type, level, minDamage, maxDamage, range, ammo, speed}) {
    super({name, type, level, minDamage, maxDamage, range, ammo, speed})
  }
  lvlUp() {
    this.level += 1;
    this.damage.min += 2;
    this.damage.max += 2;
    this.speed -= 5;
    return console.log('Your weapon level has been increased!!!')
  }
}

const newBow = new BowWeapon({
  name: 'Zephir',
  type: 'Bow',
  level: 0,
  minDamage: 2,
  maxDamage: 10,
  range: 100,
  speed: 800,
  ammo: 6
});

const newSword = new SwordWeapon({
  name: 'Arondite',
  type: 'Two handed sword',
  level: 0,
  minDamage: 5,
  maxDamage: 10,
  radius: 5,
  speed: 1500,
  durability: 150
})


